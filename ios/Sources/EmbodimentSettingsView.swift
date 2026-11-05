import SwiftUI

enum EmbodimentPreferences {
    static func dynamics(_ defaults: UserDefaults = .standard) -> BodyDynamicsSettings {
        BodyDynamicsSettings(breathing: defaults.object(forKey:"bodyBreathing") as? Bool ?? true,
            physics: defaults.object(forKey:"bodyPhysics") as? Bool ?? true,
            strength: Float(defaults.object(forKey:"bodyStrength") as? Double ?? 0.65))
    }
    static func lighting(_ defaults: UserDefaults = .standard) -> StageLightingSettings {
        func value(_ key: String, _ fallback: Double) -> Float { Float(defaults.object(forKey:key) as? Double ?? fallback) }
        return StageLightingSettings(azimuth:value("lightAzimuth",34),elevation:value("lightElevation",38),
            key:value("lightKey",1),fill:value("lightFill",0.7),warmth:value("lightWarmth",0.12),
            softness:value("lightSoftness",0.18),rim:value("lightRim",0.12))
    }
}

struct EmbodimentSettingsView: View {
    @AppStorage("bodyBreathing") private var breathing = true
    @AppStorage("bodyPhysics") private var physics = true
    @AppStorage("bodyStrength") private var strength = 0.65
    @AppStorage("touchAI") private var touchAI = true
    @AppStorage("touchHaptics") private var haptics = true
    @AppStorage("lightAzimuth") private var azimuth = 34.0
    @AppStorage("lightElevation") private var elevation = 38.0
    @AppStorage("lightKey") private var key = 1.0
    @AppStorage("lightFill") private var fill = 0.7
    @AppStorage("lightWarmth") private var warmth = 0.12
    @AppStorage("lightSoftness") private var softness = 0.18
    @AppStorage("lightRim") private var rim = 0.12
    var body: some View {
        NavigationStack {
            Form {
                Section("身体反馈") {
                    Toggle("自然呼吸",isOn:$breathing).accessibilityIdentifier("bodyBreathing")
                    Toggle("胸部与臀部惯性",isOn:$physics)
                    adjustment("物理强度",value:$strength,range:0...1.5)
                    Toggle("触碰时让 AI 回应",isOn:$touchAI)
                    Toggle("手机轻振反馈",isOn:$haptics)
                    Text("触碰额头、脸颊、手臂等位置可触发反馈。AI 回应使用你配置的 API。")
                        .font(.footnote).foregroundStyle(.secondary)
                }
                Section("打光与着色") {
                    HStack {
                        Button("柔和") { azimuth=34; elevation=38; key=1; fill=0.7; warmth=0.12; softness=0.18; rim=0.12 }
                        Spacer()
                        Button("夕阳") { azimuth = -55; elevation=18; key=1.15; fill=0.55; warmth=0.8; softness=0.12; rim=0.3 }
                        Spacer()
                        Button("清冷") { azimuth=55; elevation=50; key=0.9; fill=0.65; warmth = -0.7; softness=0.22; rim=0.2 }
                    }
                    adjustment("主光左右",value:$azimuth,range: -90...90)
                    adjustment("主光高度",value:$elevation,range:5...85)
                    adjustment("主光强度",value:$key,range:0...1.8)
                    adjustment("环境补光",value:$fill,range:0.1...1.2)
                    adjustment("冷暖",value:$warmth,range: -1...1)
                    adjustment("阴影柔和度",value:$softness,range:0.02...0.5)
                    adjustment("边缘光",value:$rim,range:0...0.5)
                    Text("返回主屏后应用。使用角色原贴图、MatCap 和脸部阴影，叠加可调卡通打光。")
                        .font(.footnote).foregroundStyle(.secondary)
                }
            }.navigationTitle("身体与光照")
        }
    }
    private func adjustment(_ title:String,value:Binding<Double>,range:ClosedRange<Double>) -> some View {
        VStack(alignment:.leading) {
            HStack { Text(title); Spacer(); Text(value.wrappedValue,format:.number.precision(.fractionLength(2))).foregroundStyle(.secondary) }
            Slider(value:value,in:range).accessibilityLabel(title)
        }
    }
}
