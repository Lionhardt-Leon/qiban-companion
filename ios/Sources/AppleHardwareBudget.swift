import Foundation

enum AppleHardwareBudget {
    static var thermal:String {switch ProcessInfo.processInfo.thermalState {case .nominal:return "nominal";case .fair:return "fair";case .serious:return "serious";case .critical:return "critical";@unknown default:return "fair"}}
    static func frameRate(thermal:String,lowPower:Bool)->Int {thermal == "critical" ? 20:thermal == "serious" || lowPower ? 30:60}
    static var frameRate:Int {frameRate(thermal:thermal,lowPower:ProcessInfo.processInfo.isLowPowerModeEnabled)}
}
