import SwiftUI
import UniformTypeIdentifiers

struct VoiceCallOverlay: View {
    @EnvironmentObject private var call: VoiceCallManager

    var body: some View {
        Group {
            if call.active {
                if call.mode == .inAppLite {
                    liteFloatingBar
                } else if call.theme.layout == .fullScreen {
                    fullPhoneScreen
                } else {
                    dockedEdgeBar
                }
            }
        }
        .sheet(isPresented: $call.showingThemeSheet) {
            VoiceCallThemeSheet()
                .environmentObject(call)
        }
    }

    // MARK: - Mode 1A: Full-Screen Phone Call UI
    private var fullPhoneScreen: some View {
        ZStack {
            backgroundLayer.ignoresSafeArea()
            VStack(spacing: 0) {
                topBar
                Spacer(minLength: 14)
                centerIdentity
                if call.camera.enabled, let session = call.camera.session {
                    RearCameraPreview(session: session)
                        .frame(width: 152, height: 204)
                        .background(.black)
                        .clipShape(RoundedRectangle(cornerRadius: 20))
                        .overlay(RoundedRectangle(cornerRadius: 20).stroke(.white.opacity(0.35), lineWidth: 1))
                        .overlay(alignment: .topLeading) {
                            Text("后置镜头实时对话")
                                .font(.caption2.bold())
                                .padding(.horizontal, 8).padding(.vertical, 4)
                                .background(.black.opacity(0.55), in: Capsule())
                                .padding(8)
                        }
                        .padding(.top, 14)
                }
                transcriptCard
                Spacer(minLength: 18)
                bottomControls
            }
            .padding(.horizontal, 22)
            .padding(.top, 12)
            .padding(.bottom, 30)
        }
        .foregroundStyle(.white)
        .preferredColorScheme(.dark)
        .transition(.opacity)
    }

    @ViewBuilder
    private var backgroundLayer: some View {
        if call.theme.useBackgroundImage, let image = call.backgroundImage {
            GeometryReader { proxy in
                Image(uiImage: image)
                    .resizable()
                    .scaledToFill()
                    .frame(width: proxy.size.width, height: proxy.size.height)
                    .clipped()
                    .overlay(Color.black.opacity(0.42))
            }
        } else {
            LinearGradient(
                colors: call.theme.preset.colors,
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
        }
    }

    private var topBar: some View {
        HStack(spacing: 10) {
            Menu {
                ForEach(VoiceCallLayout.allCases) { option in
                    Button {
                        call.theme.layout = option
                    } label: {
                        Label(option.title, systemImage: call.theme.layout == option ? "checkmark.circle.fill" : "circle")
                    }
                }
            } label: {
                Label("缩小", systemImage: "arrow.down.right.and.arrow.up.left")
                    .font(.caption.bold())
                    .padding(.horizontal, 12).padding(.vertical, 8)
                    .background(.ultraThinMaterial, in: Capsule())
            }

            Spacer()

            HStack(spacing: 5) {
                Image(systemName: call.bluetoothConnected ? "headphones" : (call.theme.bluetoothOnly ? "exclamationmark.triangle.fill" : "speaker.wave.2"))
                Text(call.routeLabel).lineLimit(1)
            }
            .font(.caption2)
            .padding(.horizontal, 10).padding(.vertical, 6)
            .background(call.theme.bluetoothOnly && !call.bluetoothConnected ? Color.orange.opacity(0.35) : Color.white.opacity(0.14), in: Capsule())

            Button {
                call.showingThemeSheet = true
            } label: {
                Image(systemName: "paintbrush.pointed.fill")
                    .font(.subheadline)
                    .frame(width: 34, height: 34)
                    .background(.ultraThinMaterial, in: Circle())
            }
            .accessibilityLabel("通话主题与头像设置")
        }
    }

    private var centerIdentity: some View {
        VStack(spacing: 14) {
            ZStack {
                Circle()
                    .stroke(.white.opacity(call.busy ? 0.55 : 0.22), lineWidth: call.busy ? 4 : 2)
                    .frame(width: 152, height: 152)
                if let avatar = call.avatarImage {
                    Image(uiImage: avatar)
                        .resizable()
                        .scaledToFill()
                        .frame(width: 138, height: 138)
                        .clipShape(Circle())
                } else {
                    Circle()
                        .fill(LinearGradient(colors: [.indigo.opacity(0.85), .purple.opacity(0.75)], startPoint: .topLeading, endPoint: .bottomTrailing))
                        .frame(width: 138, height: 138)
                        .overlay {
                            Text(String(call.characterName.prefix(1)))
                                .font(.system(size: 56, weight: .semibold, design: .rounded))
                        }
                }
            }
            .shadow(color: .black.opacity(0.35), radius: 18, y: 8)
            .onTapGesture { call.showingThemeSheet = true }

            Text(call.characterName)
                .font(.title.bold())
            Text(call.formattedDuration + " · " + (call.phase.isEmpty ? "通话中" : call.phase))
                .font(.subheadline)
                .foregroundStyle(.white.opacity(0.82))
                .multilineTextAlignment(.center)
            if let error = call.errorMessage {
                Text(error)
                    .font(.caption)
                    .foregroundStyle(.orange)
                    .multilineTextAlignment(.center)
                    .padding(.horizontal)
            }
        }
    }

    private var transcriptCard: some View {
        VStack(alignment: .leading, spacing: 6) {
            if !call.lastUserText.isEmpty {
                Text("你：\(call.lastUserText)")
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.75))
                    .lineLimit(2)
            }
            if !call.lastReplyText.isEmpty {
                Text("\(call.characterName)：\(call.lastReplyText)")
                    .font(.subheadline)
                    .foregroundStyle(.white)
                    .lineLimit(4)
            }
            HStack {
                Text("熄屏后仍可保持通话 · 说完自动发送")
                    .font(.caption2)
                    .foregroundStyle(.white.opacity(0.6))
                Spacer()
                Button("打断并说话") { call.interruptAndListen() }
                    .font(.caption2.bold())
                    .padding(.horizontal, 10).padding(.vertical, 5)
                    .background(.white.opacity(0.18), in: Capsule())
            }
        }
        .padding(14)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(.black.opacity(0.28), in: RoundedRectangle(cornerRadius: 18))
        .padding(.top, 14)
    }

    private var bottomControls: some View {
        VStack(spacing: 14) {
            HStack(spacing: 12) {
                Button { call.toggleBluetoothOnly() } label: {
                    Label(call.theme.bluetoothOnly ? "仅蓝牙播放：开（防外放）" : "仅蓝牙播放：关", systemImage: "headphones")
                        .font(.caption.bold())
                        .padding(.horizontal, 12).padding(.vertical, 7)
                        .background(call.theme.bluetoothOnly ? Color.mint.opacity(0.32) : Color.white.opacity(0.14), in: Capsule())
                }
                Button { call.toggleMute() } label: {
                    Label(call.muted ? "已静音" : "麦克风开", systemImage: call.muted ? "mic.slash.fill" : "mic.fill")
                        .font(.caption.bold())
                        .padding(.horizontal, 12).padding(.vertical, 7)
                        .background(call.muted ? Color.orange.opacity(0.35) : Color.white.opacity(0.14), in: Capsule())
                }
            }

            HStack(alignment: .center) {
                // Bottom Left: Speakerphone
                VStack(spacing: 6) {
                    Button { call.toggleSpeakerphone() } label: {
                        Image(systemName: call.theme.speakerphone && !call.theme.bluetoothOnly ? "speaker.wave.3.fill" : "speaker.wave.1.fill")
                            .font(.title2)
                            .frame(width: 62, height: 62)
                            .background(call.theme.speakerphone && !call.theme.bluetoothOnly ? Color.white : Color.white.opacity(0.18), in: Circle())
                            .foregroundStyle(call.theme.speakerphone && !call.theme.bluetoothOnly ? Color.black : Color.white)
                    }
                    Text(call.theme.bluetoothOnly ? "蓝牙优先" : (call.theme.speakerphone ? "免提开" : "听筒"))
                        .font(.caption)
                }

                Spacer()

                // Bottom Center: Red Hang Up
                VStack(spacing: 6) {
                    Button { call.hangUp() } label: {
                        Image(systemName: "phone.down.fill")
                            .font(.title)
                            .frame(width: 74, height: 74)
                            .background(Color.red, in: Circle())
                            .foregroundStyle(.white)
                            .shadow(color: .red.opacity(0.45), radius: 14, y: 6)
                    }
                    .accessibilityLabel("挂断通话")
                    Text("挂断").font(.caption)
                }

                Spacer()

                // Bottom Right: Rear Camera Video Call
                VStack(spacing: 6) {
                    Button { call.toggleVideo() } label: {
                        Image(systemName: call.camera.enabled ? "video.fill" : "video.slash.fill")
                            .font(.title2)
                            .frame(width: 62, height: 62)
                            .background(call.camera.enabled ? Color.white : Color.white.opacity(0.18), in: Circle())
                            .foregroundStyle(call.camera.enabled ? Color.black : Color.white)
                    }
                    Text(call.camera.enabled ? "视频开" : "视频对话")
                        .font(.caption)
                }
            }
            .padding(.horizontal, 12)
        }
    }

    // MARK: - Mode 1B: Docked Left/Right Horizontal Bar (Full Phone Mode minimized)
    private var dockedEdgeBar: some View {
        VStack {
            HStack {
                if call.theme.layout == .dockRight { Spacer() }
                HStack(spacing: 10) {
                    Button { call.hangUp() } label: {
                        Image(systemName: "phone.down.fill")
                            .font(.subheadline.bold())
                            .foregroundStyle(.white)
                            .padding(.horizontal, 14).padding(.vertical, 9)
                            .background(Color.red, in: Capsule())
                    }
                    .accessibilityLabel("挂断通话")

                    VStack(alignment: .leading, spacing: 2) {
                        Text("\(call.characterName) · \(call.formattedDuration)")
                            .font(.caption.bold()).foregroundStyle(.white)
                        Text(call.phase.isEmpty ? "通话中" : call.phase)
                            .font(.caption2).foregroundStyle(.white.opacity(0.75)).lineLimit(1)
                    }
                    .frame(maxWidth: 130, alignment: .leading)

                    Button { call.theme.layout = .fullScreen } label: {
                        Image(systemName: "arrow.up.left.and.arrow.down.right")
                            .font(.caption.bold()).foregroundStyle(.white)
                            .frame(width: 30, height: 30)
                            .background(.white.opacity(0.18), in: Circle())
                    }
                    .accessibilityLabel("展开通话界面")
                }
                .padding(.horizontal, 10).padding(.vertical, 7)
                .background(.ultraThinMaterial, in: Capsule())
                .overlay(Capsule().stroke(.white.opacity(0.22)))
                .shadow(color: .black.opacity(0.3), radius: 12, y: 4)
                if call.theme.layout == .dockLeft { Spacer() }
            }
            .padding(.horizontal, 14)
            .padding(.top, 56)
            Spacer()
        }
        .allowsHitTesting(true)
    }

    // MARK: - Mode 2: In-App Lite Call (No Phone UI — Horizontal Hang-Up Pill Only)
    private var liteFloatingBar: some View {
        VStack {
            HStack {
                Spacer()
                HStack(spacing: 8) {
                    Button { call.hangUp() } label: {
                        HStack(spacing: 5) {
                            Image(systemName: "phone.down.fill")
                            Text("挂断")
                        }
                        .font(.caption.bold())
                        .foregroundStyle(.white)
                        .padding(.horizontal, 13).padding(.vertical, 8)
                        .background(Color.red, in: Capsule())
                    }
                    .accessibilityLabel("挂断轻通话")

                    Text(call.phase.isEmpty ? call.formattedDuration : call.phase)
                        .font(.caption2)
                        .foregroundStyle(.white)
                        .lineLimit(1)
                        .frame(maxWidth: 118, alignment: .leading)

                    Button { call.toggleBluetoothOnly() } label: {
                        Image(systemName: call.theme.bluetoothOnly ? "headphones" : (call.theme.speakerphone ? "speaker.wave.2.fill" : "speaker.wave.1.fill"))
                            .font(.caption.bold())
                            .foregroundStyle(call.theme.bluetoothOnly ? .mint : .white)
                            .frame(width: 28, height: 28)
                            .background(.white.opacity(0.16), in: Circle())
                    }
                    .accessibilityLabel("切换蓝牙防外放")

                    Button { call.interruptAndListen() } label: {
                        Image(systemName: "mic.fill")
                            .font(.caption.bold())
                            .foregroundStyle(.white)
                            .frame(width: 28, height: 28)
                            .background(.white.opacity(0.16), in: Circle())
                    }
                    .accessibilityLabel("打断并立即说话")
                }
                .padding(.horizontal, 9).padding(.vertical, 6)
                .background(.black.opacity(0.68), in: Capsule())
                .overlay(Capsule().stroke(.white.opacity(0.24)))
                .shadow(color: .black.opacity(0.32), radius: 10, y: 4)
            }
            .padding(.horizontal, 14)
            .padding(.top, 54)
            Spacer()
        }
    }
}

struct VoiceCallThemeSheet: View {
    @EnvironmentObject private var call: VoiceCallManager
    @Environment(\.dismiss) private var dismiss
    @State private var pickingBackground = false
    @State private var pickingAvatar = false
    @State private var notice = ""

    var body: some View {
        NavigationStack {
            Form {
                Section("通话界面显示位置（电话模式）") {
                    Picker("显示方式", selection: $call.theme.layout) {
                        ForEach(VoiceCallLayout.allCases) { option in
                            Text(option.title).tag(option)
                        }
                    }.pickerStyle(.segmented)
                    Text("选择「缩到左侧」或「缩到右侧」时，通话会收缩为横置挂断条，方便你同时操作其他页面。")
                        .font(.caption).foregroundStyle(.secondary)
                }

                Section("音频与防尴尬外放") {
                    Toggle("仅允许蓝牙／耳机播放（防外放）", isOn: $call.theme.bluetoothOnly)
                    Toggle("默认开启免提扬声器", isOn: $call.theme.speakerphone)
                        .disabled(call.theme.bluetoothOnly)
                    Text("开启「仅蓝牙播放」后，若未连接蓝牙耳机或有线耳机，系统会自动拦截语音外放，避免在公共场合尴尬。")
                        .font(.caption).foregroundStyle(.secondary)
                }

                Section("AI 通话头像（当前角色：\(call.characterName)）") {
                    HStack(spacing: 14) {
                        if let avatar = call.avatarImage {
                            Image(uiImage: avatar).resizable().scaledToFill()
                                .frame(width: 56, height: 56).clipShape(Circle())
                        } else {
                            Circle().fill(.indigo.opacity(0.4))
                                .frame(width: 56, height: 56)
                                .overlay { Text(String(call.characterName.prefix(1))).font(.title2.bold()) }
                        }
                        VStack(alignment: .leading, spacing: 6) {
                            Button("从相册选择 AI 头像") { pickingAvatar = true }
                            if call.avatarImage != nil {
                                Button("恢复默认头像", role: .destructive) {
                                    VoiceCallMediaStore.clearAvatar(cardKey: call.currentCardKey)
                                    call.reloadMedia()
                                }.font(.caption)
                            }
                        }
                    }
                }

                Section("通话背景主题") {
                    Toggle("使用自定义背景图片", isOn: $call.theme.useBackgroundImage)
                        .disabled(call.backgroundImage == nil)
                    Button("从相册导入背景图片") { pickingBackground = true }
                    if call.backgroundImage != nil {
                        Button("清除背景图片", role: .destructive) {
                            VoiceCallMediaStore.clearBackground()
                            call.theme.useBackgroundImage = false
                            call.reloadMedia()
                        }
                    }
                    LazyVGrid(columns: [GridItem(.adaptive(minimum: 90), spacing: 10)], spacing: 10) {
                        ForEach(VoiceCallColorPreset.allCases) { preset in
                            Button {
                                call.theme.colorPreset = preset.rawValue
                                call.theme.useBackgroundImage = false
                            } label: {
                                VStack(spacing: 6) {
                                    RoundedRectangle(cornerRadius: 12)
                                        .fill(LinearGradient(colors: preset.colors, startPoint: .topLeading, endPoint: .bottomTrailing))
                                        .frame(height: 44)
                                        .overlay(
                                            RoundedRectangle(cornerRadius: 12)
                                                .stroke(!call.theme.useBackgroundImage && call.theme.colorPreset == preset.rawValue ? Color.white : Color.clear, lineWidth: 2)
                                        )
                                    Text(preset.title).font(.caption2)
                                }
                            }.buttonStyle(.plain)
                        }
                    }.padding(.vertical, 6)
                }

                if !notice.isEmpty {
                    Section { Text(notice).font(.caption).foregroundStyle(.mint) }
                }
            }
            .navigationTitle("通话主题与音频设置")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar { Button("完成") { dismiss() } }
            .sheet(isPresented: $pickingBackground) {
                ChatPhotoPicker { result in
                    pickingBackground = false
                    do {
                        if let frame = try result.get() {
                            try VoiceCallMediaStore.saveBackground(frame.jpeg)
                            call.theme.useBackgroundImage = true
                            call.reloadMedia()
                            notice = "已更新通话背景图片。"
                        }
                    } catch { notice = error.localizedDescription }
                }
            }
            .sheet(isPresented: $pickingAvatar) {
                ChatPhotoPicker { result in
                    pickingAvatar = false
                    do {
                        if let frame = try result.get() {
                            try VoiceCallMediaStore.saveAvatar(frame.jpeg, cardKey: call.currentCardKey)
                            call.reloadMedia()
                            notice = "已更新「\(call.characterName)」的通话头像。"
                        }
                    } catch { notice = error.localizedDescription }
                }
            }
        }
        .preferredColorScheme(.dark)
        .tint(Color(red: 0.71, green: 0.69, blue: 1))
    }
}
