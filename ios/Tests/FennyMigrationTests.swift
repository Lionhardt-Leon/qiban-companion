import XCTest
import UIKit
@testable import QibanCompanion

final class FennyMigrationTests:XCTestCase {
    func testCharacterPackagesAreSavedSeparatelyAndInvalidIdentityCannotCommit() throws {
        let folder=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString);defer{try? FileManager.default.removeItem(at:folder)}
        let library=SnowbreakLibrary(directory:folder)
        let enya=Data([0x50,0x4b,3,4]+Array(repeating:UInt8(1),count:30)),fenny=Data([0x50,0x4b,3,4]+Array(repeating:UInt8(2),count:30))
        try library.commit(library.stage(enya),characterID:"Enya");try library.commit(library.stage(fenny),characterID:"Fenny")
        XCTAssertEqual(try Data(contentsOf:library.savedFile("Enya")),enya);XCTAssertEqual(try Data(contentsOf:library.savedFile("Fenny")),fenny);XCTAssertEqual(try Data(contentsOf:library.current),fenny)
        XCTAssertEqual(library.savedCharacters,["Enya","Fenny"]);XCTAssertThrowsError(try library.commit(library.stage(enya),characterID:"unknown"))
    }
    @MainActor func testPersonaBindingSwitchesFromEnyaToFennyWithoutMixingConversations() throws {
        let folder=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString);defer{try? FileManager.default.removeItem(at:folder)}
        let store=LocalStore(directory:folder);var library=PersonaLibrary.migrating("恩雅人设");let enya=library.cards[0].id
        var fenny=PersonaCard();fenny.name="芬妮";fenny.description="芬妮人设";library.cards.append(fenny);library.modelBindings["enya"]=enya;library.modelBindings["fenny"]=fenny.id
        try store.savePersonas(library,selected:enya,modelKey:"enya");store.activateCompanion("enya");try store.saveMemories("恩雅独立记忆")
        store.activateCompanion("fenny");XCTAssertEqual(store.currentCard?.id,fenny.id);XCTAssertEqual(store.archive.memories,"")
        try store.saveMemories("芬妮独立记忆");store.activateCompanion("enya");XCTAssertEqual(store.archive.memories,"恩雅独立记忆")
        store.activateCompanion("fenny");XCTAssertEqual(store.archive.memories,"芬妮独立记忆");try store.archive.validate()
    }
    func testOnlyLoadedFennySourceActionsEnterTheAIProtocol(){
        XCTAssertEqual(DialogueMotion.allowed(["snowbreak_home_jealous","snowbreak_home_marry","unverified_fenny_action"]),["snowbreak_home_jealous","snowbreak_home_marry"])
    }
    @MainActor func testFirstFennySelectionCreatesIndependentEditableIdentityAndPreservesLegacyHistory() throws {
        let folder=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString);defer{try? FileManager.default.removeItem(at:folder)}
        let store=LocalStore(directory:folder);try store.saveMemories("旧角色的记忆")
        store.activateCompanion("fenny");XCTAssertNil(store.error);let id=try XCTUnwrap(store.currentCard?.id)
        XCTAssertEqual(store.currentCard?.name,"芬妮");XCTAssertEqual(store.archive.memories,"")
        store.activateCompanion("enya");XCTAssertEqual(store.archive.memories,"旧角色的记忆")
        store.activateCompanion("fenny");XCTAssertEqual(store.currentCard?.id,id)
        XCTAssertEqual(store.archive.settings.personas?.cards.filter{$0.name == "芬妮"}.count,1)
    }
    @MainActor func testWebKitSwitchesCharactersAndRestoresUnderwearSelection() async throws {
        let folder=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString);let library=SnowbreakLibrary(directory:folder)
        defer{try? FileManager.default.removeItem(at:folder)}
        try library.commit(library.stage(SnowbreakFixture.data),characterID:"Enya")
        try library.commit(library.stage(SnowbreakFixture.fennyData),characterID:"Fenny")
        let stage=SnowbreakStage(library:library),view=stage.makeView(),window=UIWindow(frame:UIScreen.main.bounds),controller=UIViewController()
        controller.view.addSubview(view);view.frame=window.bounds;window.rootViewController=controller;window.makeKeyAndVisible()
        defer{stage.detach(view);window.isHidden=true}
        @MainActor func ready() async throws {
            let deadline=Date().addingTimeInterval(90)
            while !stage.ready && stage.error == nil && Date()<deadline {try await Task.sleep(nanoseconds:100_000_000)}
            XCTAssertNil(stage.error)
            guard stage.ready else{XCTFail("WebKit did not finish loading the selected character within 90 seconds");throw URLError(.timedOut)}
        }
        try await ready();XCTAssertEqual(stage.characterID,"Fenny")
        stage.selectVariant(outfit:"underwear");try await ready();XCTAssertEqual(stage.companionOutfit,"underwear")
        await stage.refreshBodyState();XCTAssertTrue(stage.bodyState.outfit.contains("不是裸体"))
        stage.selectCharacter("Enya");try await ready();XCTAssertEqual(stage.characterID,"Enya")
        stage.selectCharacter("Fenny");try await ready();XCTAssertEqual(stage.characterID,"Fenny");XCTAssertEqual(stage.companionOutfit,"underwear")
        XCTAssertEqual(stage.savedCharacters,["Enya","Fenny"])
    }
}
