import UIKit

enum AppOrientationMode: String, CaseIterable, Identifiable {
    case auto
    case portrait
    case landscape

    var id: String { rawValue }
    var label: String {
        switch self {
        case .auto: return "自动旋转"
        case .portrait: return "锁定竖屏"
        case .landscape: return "锁定横屏"
        }
    }
    var shortLabel: String {
        switch self {
        case .auto: return "自动"
        case .portrait: return "竖屏"
        case .landscape: return "横屏"
        }
    }
    var icon: String {
        switch self {
        case .auto: return "rectangle.portrait.rotate"
        case .portrait: return "rectangle.portrait"
        case .landscape: return "rectangle"
        }
    }
    var mask: UIInterfaceOrientationMask {
        switch self {
        case .auto: return .allButUpsideDown
        case .portrait: return .portrait
        case .landscape: return .landscape
        }
    }
    var next: AppOrientationMode {
        switch self {
        case .auto: return .landscape
        case .landscape: return .portrait
        case .portrait: return .auto
        }
    }
    static var saved: AppOrientationMode {
        AppOrientationMode(rawValue: UserDefaults.standard.string(forKey: "appOrientationMode") ?? "") ?? .auto
    }
}

@MainActor final class CompanionAppDelegate: NSObject, UIApplicationDelegate {
    static var orientation: UIInterfaceOrientationMask = AppOrientationMode.saved.mask
    func application(_ application: UIApplication, supportedInterfaceOrientationsFor window: UIWindow?) -> UIInterfaceOrientationMask {
        Self.orientation
    }
}

@MainActor enum GameOrientation {
    private static var inGame = false

    static func applySaved() {
        let mode = AppOrientationMode.saved
        if !inGame {
            applyMask(mode.mask, requestUpdate: mode != .auto)
        }
        let keepAwake = UserDefaults.standard.bool(forKey: "deskPetKeepAwake")
        UIApplication.shared.isIdleTimerDisabled = keepAwake
    }

    static func setUserMode(_ mode: AppOrientationMode) {
        UserDefaults.standard.set(mode.rawValue, forKey: "appOrientationMode")
        guard !inGame else { return }
        applyMask(mode.mask, requestUpdate: true)
    }

    static func setKeepAwake(_ enabled: Bool) {
        UserDefaults.standard.set(enabled, forKey: "deskPetKeepAwake")
        UIApplication.shared.isIdleTimerDisabled = enabled
    }

    static func setGame(_ enabled: Bool) {
        inGame = enabled
        let mask: UIInterfaceOrientationMask = enabled ? .landscape : AppOrientationMode.saved.mask
        applyMask(mask, requestUpdate: true)
    }

    private static func applyMask(_ mask: UIInterfaceOrientationMask, requestUpdate: Bool) {
        CompanionAppDelegate.orientation = mask
        for scene in UIApplication.shared.connectedScenes.compactMap({ $0 as? UIWindowScene }) where scene.activationState != .unattached {
            for window in scene.windows {
                window.rootViewController?.setNeedsUpdateOfSupportedInterfaceOrientations()
                window.rootViewController?.presentedViewController?.setNeedsUpdateOfSupportedInterfaceOrientations()
            }
            if requestUpdate {
                scene.requestGeometryUpdate(.iOS(interfaceOrientations: mask))
            }
        }
    }
}
