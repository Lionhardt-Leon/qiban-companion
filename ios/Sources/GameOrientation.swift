import UIKit

/// Only the card game's full-screen cover opts into landscape. The companion,
/// communications and import pickers keep their normal portrait presentation.
@MainActor final class CompanionAppDelegate:NSObject,UIApplicationDelegate {
    static var orientation:UIInterfaceOrientationMask = .portrait
    func application(_ application:UIApplication,supportedInterfaceOrientationsFor window:UIWindow?)->UIInterfaceOrientationMask {Self.orientation}
}

@MainActor enum GameOrientation {
    static func setGame(_ enabled:Bool) {
        CompanionAppDelegate.orientation = enabled ? .landscape:.portrait
        for scene in UIApplication.shared.connectedScenes.compactMap({$0 as? UIWindowScene}) where scene.activationState != .unattached {
            for window in scene.windows {
                window.rootViewController?.setNeedsUpdateOfSupportedInterfaceOrientations()
                window.rootViewController?.presentedViewController?.setNeedsUpdateOfSupportedInterfaceOrientations()
            }
            scene.requestGeometryUpdate(.iOS(interfaceOrientations:enabled ? .landscape:.portrait))
        }
    }
}
