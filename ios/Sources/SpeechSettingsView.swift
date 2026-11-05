import SwiftUI

struct SpeechSettingsView:View {
    @EnvironmentObject private var store:LocalStore
    @EnvironmentObject private var speech:CompanionSpeech
    @State private var draft=SpeechPreferences()
    @State private var picking=false
    @State private var notice=""
    @State private var loaded=false
    private var choices:[VoiceManifest.Voice] {[
        .init(id:"system.zh",title:"系统中文（非训练音色）",language:"zh",directory:""),
        .init(id:"system.ja",title:"系统日语（非训练音色）",language:"ja",directory:"")]+speech.voices}
    var body:some View {
        NavigationStack {
            Form {
                Section("离线语音包") {
                    Text(speech.packageName.isEmpty ? "尚未导入训练语音包":speech.packageName).accessibilityIdentifier("speechPackageStatus")
                    Button("导入中／日离线语音包"){picking=true}.disabled(speech.importing || store.busy).accessibilityIdentifier("importVoicePackage")
                    if speech.importing {ProgressView(value:speech.importProgress){Text("导入并校验 \(Int(speech.importProgress*100))%")}}
                    Text("选择本机 .qvoice 文件。只导入为本 App 导出的语音包；不支持直接打开 .pth／.ckpt。导入后中、日配音都在手机本机合成，无需连接电脑。系统音色与训练音色分开标明。")
                        .font(.caption).foregroundStyle(.secondary)
                }
                Section("全局配音") {
                    Picker("音色",selection:$draft.voiceID) {
                        ForEach(choices){voice in Text(voice.title).tag(voice.id)}
                        if !choices.contains(where:{$0.id==draft.voiceID}) {Text("尚未导入的音色："+draft.voiceID).tag(draft.voiceID)}
                    }.accessibilityIdentifier("speechVoicePicker")
                    Button {draft.autoPlay.toggle()} label:{
                        HStack {
                            Text("自动朗读 AI 回复");Spacer()
                            Label(draft.autoPlay ? "已开启":"已关闭",systemImage:draft.autoPlay ? "checkmark.circle.fill":"circle")
                                .foregroundStyle(draft.autoPlay ? .green:.secondary)
                        }.frame(maxWidth:.infinity,alignment:.leading).contentShape(Rectangle())
                    }.buttonStyle(.plain).accessibilityValue(draft.autoPlay ? "1":"0").accessibilityIdentifier("speechAutoPlay")
                    Text(draft.language=="ja" ? "角色说日语，聊天显示中文译文；日文原话可在聊天记录中查看。需要 AI 接口返回日文原话；不会把中文台词当作日语强读。":"角色说中文。选择训练音色后，文字对话和语音通话使用同一套配音。")
                        .font(.caption).foregroundStyle(.secondary)
                    Slider(value:$draft.speed,in:0.7...1.3){Text("语速")};Text("语速 \(draft.speed,specifier:"%.2f")×").font(.caption)
                    Slider(value:$draft.volume,in:0...1){Text("音量")}
                    Button("保存语音设置"){save()}.disabled(store.busy || speech.importing).accessibilityIdentifier("saveSpeechSettings")
                }
                Section("试听") {
                    Button("试听当前音色") {
                        let sample=Message(role:"assistant",content:"下午好，我在这里陪着你。",spokenJapanese:"こんにちは。今日は何を話しましょうか。")
                        speech.speak(sample,preferences:draft)
                    }.disabled(speech.importing || store.busy).accessibilityIdentifier("previewSpeechVoice")
                    Button("停止朗读"){speech.stop()}.disabled(!speech.busy)
                    if !speech.status.isEmpty {Text(speech.status).font(.caption)}
                    if let error=speech.error {Text(error).foregroundStyle(.red).font(.caption)}
                    if !notice.isEmpty {Text(notice).accessibilityIdentifier("speechSettingsNotice")}
                }
                Section {Text("音色设置为全局设置。更换模型或人设不会自动改用另一种声音。原作自带的互动原声片段由“恩雅原声”开关单独控制，可关闭以避免与配音混用。语言选择影响 AI 后续回复；离线合成不代表 AI 对话也改为本地运行。")
                    .font(.caption).foregroundStyle(.secondary)}
            }.navigationTitle("离线语音").navigationBarTitleDisplayMode(.inline)
        }
        .onAppear {if !loaded {draft=store.archive.settings.speech ?? SpeechPreferences();loaded=true}}
        .onChange(of:draft.voiceID) {id in if let choice=choices.first(where:{$0.id==id}) {draft.language=choice.language}}
        .onChange(of:speech.importing) {value in
            if !value,speech.error==nil,!speech.voices.isEmpty {
                if !speech.voices.contains(where:{$0.id==draft.voiceID}),let first=speech.voices.first(where:{$0.language=="zh"}) {draft.voiceID=first.id;draft.language=first.language}
                draft.autoPlay=true;save()
            }
        }
        .sheet(isPresented:$picking) {CharacterDocumentPicker {result in
            picking=false
            do {if let url=try result.get(){speech.importPackage(url)}}catch{speech.error=error.localizedDescription}
        }}
    }
    private func save(){do {try store.saveSpeech(draft);speech.stop();notice="已保存，全局使用所选配音。"}catch{speech.error=error.localizedDescription}}
}
