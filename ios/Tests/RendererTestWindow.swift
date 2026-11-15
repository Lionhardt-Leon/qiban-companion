import UIKit

/// Renderer tests need a scene-backed visible window and must restore the host
/// window, otherwise later WebKit views can remain in a background scene.
@MainActor final class RendererTestWindow {
    let window:UIWindow
    private let previous:UIWindow?
    init(view:UIView) throws {
        let scenes=UIApplication.shared.connectedScenes.compactMap{$0 as? UIWindowScene}
        guard let scene=scenes.first(where:{$0.activationState == .foregroundActive}) ?? scenes.first else {throw NSError(domain:"RendererTestWindow",code:1,userInfo:[NSLocalizedDescriptionKey:"No test window scene is available"])}
        previous=scene.windows.first(where:{$0.isKeyWindow})
        window=UIWindow(windowScene:scene);window.frame=scene.coordinateSpace.bounds
        let controller=UIViewController();window.rootViewController=controller;controller.loadViewIfNeeded()
        controller.view.addSubview(view);view.frame=window.bounds;view.autoresizingMask=[.flexibleWidth,.flexibleHeight]
        window.makeKeyAndVisible();window.layoutIfNeeded()
    }
    func close() {
        window.isHidden=true;window.rootViewController=nil
        previous?.makeKeyAndVisible()
    }
}
