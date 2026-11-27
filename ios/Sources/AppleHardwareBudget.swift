import Foundation
import Darwin.Mach

enum PerformanceMode: String, CaseIterable, Identifiable {
    case performance = "performance"
    case balanced = "balanced"
    case powersave = "powersave"

    var id: String { rawValue }
    var title: String {
        switch self {
        case .performance: return "性能模式"
        case .balanced: return "普通模式"
        case .powersave: return "省电模式"
        }
    }
    var shortTitle: String {
        switch self {
        case .performance: return "性能"
        case .balanced: return "普通"
        case .powersave: return "省电"
        }
    }
    var webMode: String {
        switch self {
        case .performance: return "quality"
        case .balanced: return "adaptive"
        case .powersave: return "battery"
        }
    }
    var summary: String {
        switch self {
        case .performance:
            return "满血 60 帧 · 满屏高清 · 最高 1024 MiB 贴图显存 · 2048px 软阴影（适合大体积 4K 角色与互动场景包）"
        case .balanced:
            return "智能 60 帧 · 动态平衡分辨率 · 最高 512 MiB 贴图显存 · 1024px 阴影（发热/低电自动稳帧）"
        case .powersave:
            return "低耗 30 帧 · 限制 2K 贴图 · 最高 192 MiB 显存 · 512px 阴影（显著降低发热与耗电）"
        }
    }
}

enum AppleHardwareBudget {
    static let modeDefaultsKey = "performanceMode"
    static let modeChangedNotification = Notification.Name("QibanPerformanceModeChanged")
    static let releaseMemoryNotification = Notification.Name("QibanReleaseMemoryRequested")

    static var currentMode: PerformanceMode {
        get {
            PerformanceMode(rawValue: UserDefaults.standard.string(forKey: modeDefaultsKey) ?? "") ?? .balanced
        }
        set {
            UserDefaults.standard.set(newValue.rawValue, forKey: modeDefaultsKey)
            NotificationCenter.default.post(name: modeChangedNotification, object: nil, userInfo: ["mode": newValue.rawValue])
        }
    }

    static var thermal: String {
        switch ProcessInfo.processInfo.thermalState {
        case .nominal: return "nominal"
        case .fair: return "fair"
        case .serious: return "serious"
        case .critical: return "critical"
        @unknown default: return "fair"
        }
    }

    static var thermalLabel: String {
        switch ProcessInfo.processInfo.thermalState {
        case .nominal: return "正常"
        case .fair: return "微热"
        case .serious: return "较热"
        case .critical: return "过热保护"
        @unknown default: return "正常"
        }
    }

    static func frameRate(thermal: String, lowPower: Bool) -> Int {
        frameRate(thermal: thermal, lowPower: lowPower, mode: currentMode)
    }

    static func frameRate(thermal: String, lowPower: Bool, mode: PerformanceMode) -> Int {
        switch mode {
        case .performance:
            return thermal == "critical" ? 30 : 60
        case .powersave:
            return thermal == "critical" ? 20 : 30
        case .balanced:
            return thermal == "critical" ? 20 : (thermal == "serious" || lowPower ? 30 : 60)
        }
    }

    static var frameRate: Int {
        frameRate(thermal: thermal, lowPower: ProcessInfo.processInfo.isLowPowerModeEnabled, mode: currentMode)
    }

    /// Real iOS physical memory footprint (same metric iOS Jetsam monitors), in MiB.
    static var memoryFootprintMB: Double {
        var info = task_vm_info_data_t()
        var count = mach_msg_type_number_t(MemoryLayout<task_vm_info_data_t>.size) / 4
        let result: kern_return_t = withUnsafeMutablePointer(to: &info) { ptr in
            ptr.withMemoryRebound(to: integer_t.self, capacity: Int(count)) { intPtr in
                task_info(mach_task_self_, task_flavor_t(TASK_VM_INFO), intPtr, &count)
            }
        }
        guard result == KERN_SUCCESS else { return 0 }
        return Double(info.phys_footprint) / 1_048_576.0
    }
}
