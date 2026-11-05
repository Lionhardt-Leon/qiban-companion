import SwiftUI
import PhotosUI
import ImageIO
import UniformTypeIdentifiers

enum ChatImage {
    static func prepare(_ data:Data,source:CameraFrame.Source = .user) throws -> CameraFrame {
        guard data.count <= 20_000_000,
              let image = CGImageSourceCreateWithData(data as CFData,[kCGImageSourceShouldCache:false] as CFDictionary),
              let cg = CGImageSourceCreateThumbnailAtIndex(image,0,[kCGImageSourceCreateThumbnailFromImageAlways:true,kCGImageSourceCreateThumbnailWithTransform:true,kCGImageSourceThumbnailMaxPixelSize:1024,kCGImageSourceShouldCacheImmediately:true] as CFDictionary),
              let jpeg = UIImage(cgImage:cg).jpegData(compressionQuality:0.65) else {throw CompanionError.message("请选择可读取的图片，原文件不超过20MB。")}
        return try CameraFrame(jpeg:jpeg,source:source)
    }
}
struct ChatPhotoPicker:UIViewControllerRepresentable {
    let completion:(Result<CameraFrame?,Error>)->Void
    func makeCoordinator()->Coordinator {Coordinator(completion)}
    func makeUIViewController(context:Context)->PHPickerViewController {
        var config = PHPickerConfiguration();config.filter = .images;config.selectionLimit = 1
        let picker = PHPickerViewController(configuration:config);picker.delegate = context.coordinator;return picker
    }
    func updateUIViewController(_ controller:PHPickerViewController,context:Context) {}
    final class Coordinator:NSObject,PHPickerViewControllerDelegate {
        let completion:(Result<CameraFrame?,Error>)->Void
        init(_ completion:@escaping(Result<CameraFrame?,Error>)->Void){self.completion = completion}
        func picker(_ picker:PHPickerViewController,didFinishPicking results:[PHPickerResult]) {
            guard let item = results.first else {completion(.success(nil));return}
            item.itemProvider.loadFileRepresentation(forTypeIdentifier:UTType.image.identifier){url,error in
                let value:Result<CameraFrame?,Error>
                do {
                    if let error = error {throw error}
                    guard let url = url,(try url.resourceValues(forKeys:[.fileSizeKey]).fileSize ?? Int.max) <= 20_000_000 else {throw CompanionError.message("图片不可读取或超过20MB。")}
                    value = .success(try ChatImage.prepare(Data(contentsOf:url)))
                } catch {value = .failure(error)}
                DispatchQueue.main.async {self.completion(value)}
            }
        }
    }
}
