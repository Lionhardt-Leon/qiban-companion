import XCTest
@testable import QibanCompanion

final class LongPersonaTests:XCTestCase {
    @MainActor func testReported23521CharactersSaveReloadExportAndReachRequestUncut() throws {
        let directory=FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString);defer{try? FileManager.default.removeItem(at:directory)}
        let text="开头标记"+String(repeating:"人",count:23513)+"末尾标记";XCTAssertEqual(text.count,23521)
        let store=LocalStore(directory:directory);let library=PersonaLibrary.migrating(text),id=library.cards[0].id
        try store.savePersonas(library,selected:id,modelKey:"native")
        let restored=LocalStore(directory:directory);XCTAssertEqual(restored.archive.settings.personas?.cards[0].description,text)
        XCTAssertEqual(try PersonaTransfer.decode(PersonaTransfer.export(library),into:library).0,library)
        let backup=try restored.export();let archive=try JSONDecoder().decode(LocalArchive.self,from:backup);try archive.validate();XCTAssertEqual(archive.settings.personas?.cards[0].description,text)
        var settings=restored.archive.settings;settings.endpoint="https://example.invalid/v1";settings.model="test"
        let request=try APIClient.makeRequest(settings:settings,key:"",history:[Message(role:"user",content:"你好")],memories:"",actions:[])
        let body=try XCTUnwrap(JSONSerialization.jsonObject(with:XCTUnwrap(request.httpBody)) as? [String:Any]),turns=try XCTUnwrap(body["messages"] as? [[String:String]])
        XCTAssertTrue(try XCTUnwrap(turns.first?["content"]).contains(text))
    }
    func testLongCombinedFieldsAndLegacyPersonaAreNotTruncated() throws {
        let text="起"+String(repeating:"长",count:99998)+"终";var settings=APISettings();settings.persona=text
        XCTAssertEqual(try PersonaPrompt.character(settings:settings,context:CompanionContext()),text)
        var library=PersonaLibrary.migrating(text);library.systemPrompt=text;library.userDescription=text;library.cards[0].personality=text;settings.personas=library
        let result=try PersonaPrompt.character(settings:settings,context:CompanionContext());XCTAssertGreaterThan(result.count,400000)
        XCTAssertTrue(result.contains(text));XCTAssertTrue(result.contains("【用户人设】"))
    }
    func testMillionCharacterFieldBoundaryAndMacroExpansion() throws {
        var library=PersonaLibrary.migrating(String(repeating:"人",count:PersonaLimits.fieldCharacters));try library.validate()
        var settings=APISettings();settings.personas=library;XCTAssertTrue(try PersonaPrompt.character(settings:settings,context:CompanionContext()).contains(library.cards[0].description))
        library.cards[0].description.append("超");XCTAssertThrowsError(try library.validate())
        let macros=String(repeating:"{{char}}🙂{{user}}\n",count:10000),expanded=PersonaPrompt.substitute(macros,char:"{{user}}",user:"我")
        XCTAssertEqual(expanded,String(repeating:"{{user}}🙂我\n",count:10000))
    }
}
