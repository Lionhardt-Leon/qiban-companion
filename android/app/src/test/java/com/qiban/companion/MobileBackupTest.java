package com.qiban.companion;

import static org.junit.Assert.*;
import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.Map;
import org.json.JSONObject;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;

public class MobileBackupTest {
    @Rule public TemporaryFolder folder = new TemporaryFolder();
    private final Map<String,String> secrets = new HashMap<>();
    private final SecretVault.Settings protect = (key,value)->SecretVault.setting(key,value,secrets::put);

    @Test public void byteLimitsCountEncodedRecordAndSurrogates()throws Exception {
        for(String s:new String[]{"", "中文", "😀", "\ud800","\udc00","A\n\"中"}) {
            int expected=s.getBytes(StandardCharsets.UTF_8).length;
            assertEquals(expected,FilesSupport.utf8Length(s));
            FilesSupport.requireBytes(s,expected);
            FilesSupport.requireBytes(s,expected+1);
            if(expected>0)assertThrows(IOException.class,()->FilesSupport.requireBytes(s,expected-1));
        }
        String value="中文\n\"".repeat(10);
        String record=PackLibrary.record("fritia_one",value);
        assertTrue(FilesSupport.utf8Length(record)>FilesSupport.utf8Length(value));
    }

    @Test public void restoreHasOnePublicationPointAndReopens()throws Exception {
        File root=folder.newFolder();
        ArchiveStore store=new ArchiveStore(root);
        PackLibrary packs=new PackLibrary(new File(root,"libraries"));
        packs.persist("fritia_old","old");
        packs.saveGame("{\"preferences\":{},\"old\":true}");
        JSONObject restored=store.snapshot().put("memories","new");
        String marker="fixture-only-private-value";
        JSONObject setting=new JSONObject().put("baseUrl","https://unit.invalid/v1").put("apiKey",marker);
        JSONObject chat=new JSONObject().put("fritia-settings",setting.toString());
        JSONObject bundle=new JSONObject().put("schema",MobileBackup.SCHEMA).put("nativeArchive",restored).put("chatStorage",chat);
        for(String stage:new String[]{"archive","chat","game"}) {
            JSONObject broken=new JSONObject(bundle.toString());
            if(stage.equals("archive"))broken.getJSONObject("nativeArchive").put("schemaVersion",-1);
            if(stage.equals("chat"))broken.getJSONObject("chatStorage").put("invalid_key","x");
            if(stage.equals("game"))broken.put("gameState","{}");
            assertThrows(Exception.class,()->MobileBackup.restore(broken,store,packs,protect));
            assertEquals(root,MobileBackup.active(root));
            assertEquals("",store.snapshot().getString("memories"));
            assertEquals("old",packs.storage(protect).getString("fritia_old"));
            assertTrue(packs.game().contains("old"));
        }
        MobileBackup.restore(bundle,store,packs,protect);
        File selected=MobileBackup.active(root);
        assertNotEquals(root,selected);
        assertTrue(new File(root,"archive.json").isFile());
        ArchiveStore cold=new ArchiveStore(root,selected);
        PackLibrary reopened=new PackLibrary(new File(root,"libraries"));
        reopened.useState(selected);
        assertEquals("new",cold.snapshot().getString("memories"));
        JSONObject rows=reopened.storage(protect);
        assertFalse(rows.has("fritia_old"));
        assertNull(reopened.game());
        String saved=rows.getString("fritia-settings");
        assertFalse(saved.contains(marker));
        assertTrue(saved.contains("qiban-vault:"));
        assertTrue(secrets.values().stream().anyMatch(s->s.contains(marker)));
        File backup=new File(root,"export.json");
        MobileBackup.exportTo(backup,cold,reopened,protect);
        String export=new String(Files.readAllBytes(backup.toPath()), StandardCharsets.UTF_8);
        assertFalse(export.contains(marker));
        JSONObject nativeOnly=new JSONObject(export).getJSONObject("nativeArchive").put("memories","native-only");
        MobileBackup.restore(nativeOnly,cold,reopened,protect);
        assertEquals(saved,reopened.storage(protect).getString("fritia-settings"));
        assertEquals("native-only",cold.snapshot().getString("memories"));
    }

    @Test public void oversizedLegacyArchiveRemainsIntact() throws Exception {
        File root = folder.newFolder();
        File archive = new File(root, "archive.json");
        long originalBytes = 108_037_153;
        try (RandomAccessFile file = new RandomAccessFile(archive, "rw")) {
            file.writeUTF("legacy-fixture");
            file.setLength(originalBytes);
        }
        assertThrows(IOException.class, () -> new ArchiveStore(root));
        assertEquals(originalBytes, archive.length());
        assertEquals(root, MobileBackup.active(root));
        try (RandomAccessFile file = new RandomAccessFile(archive, "r")) {
            assertEquals("legacy-fixture", file.readUTF());
        }
    }

    @Test public void coldStartIgnoresUnpublishedGeneration() throws Exception {
        File root = folder.newFolder();
        ArchiveStore current = new ArchiveStore(root);
        current.save(current.snapshot().put("memories", "current"));
        File pending = new File(root, "storage-12345678-1234-1234-1234-123456789abc");
        ArchiveStore candidate = new ArchiveStore(pending);
        candidate.save(candidate.snapshot().put("memories", "unpublished"));
        assertTrue(new File(pending, "chat-state").mkdirs());
        File active = MobileBackup.active(root);
        assertEquals(root, active);
        assertEquals("current", new ArchiveStore(root, active).snapshot().getString("memories"));
    }

    @Test public void packagedStorageKeysAndHistoricalRecordsUseTheVault() throws Exception {
        for (String key : new String[]{"fritia-settings", "fritia_settings"}) {
            String provider = new JSONObject().put("baseUrl","https://unit.invalid/v1")
                    .put("apiKey","provider-fixture").toString();
            String stored = protect.apply(key,provider);
            assertFalse(stored.contains("provider-fixture"));
            assertEquals(stored,protect.apply(key,stored));
        }
        File root = folder.newFolder();
        PackLibrary library = new PackLibrary(root);
        String dav = new JSONObject().put("url","https://test.invalid/dav").put("password","dav-fixture").toString();
        library.persist("fritia_archive_sync",dav); // Pre-migration disk record.
        JSONObject server = new JSONObject().put("url","https://test.invalid/mcp")
                .put("headers",new JSONObject().put("Authorization","Bearer mcp-fixture").put("X-Custom","private-header-fixture"));
        String config = new JSONObject().put("config",server).put("configJson",server.toString()).toString();
        library.persist("fritia_mcp_tool_config",config);
        JSONObject loaded = library.storage(protect);
        assertFalse(loaded.toString().contains("dav-fixture"));
        assertFalse(loaded.toString().contains("mcp-fixture"));
        assertFalse(loaded.toString().contains("private-header-fixture"));
        JSONObject disk = new PackLibrary(root).storage((k,v)->v);
        assertEquals(loaded.getString("fritia_mcp_tool_config"),disk.getString("fritia_mcp_tool_config"));
        assertEquals(loaded.getString("fritia_archive_sync"),disk.getString("fritia_archive_sync"));
    }

    @Test public void invalidConfigurationCannotFallThroughToPlaintext()throws Exception {
        assertThrows(Exception.class,()->protect.apply("fritia-settings","{"));
        assertThrows(Exception.class,()->protect.apply("fritia-settings","{\"apiKey\":\"synthetic\"}"));
        String encoded=protect.apply("fritia-settings","{\"baseUrl\":\"https://unit.invalid\",\"apiKey\":\"sample\"}");
        assertEquals(encoded,protect.apply("fritia-settings",encoded));
    }
}
