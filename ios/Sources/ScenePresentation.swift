import SwiftUI
import SceneKit
import simd

struct ScenePresentation:Codable,Equatable {
    var scale:Double = 1
    var x:Double = 0
    var y:Double = 0
    var yaw:Double = 0
    var pitch:Double = 0
    var roll:Double = 0
    var stretchX:Double = 1
    var stretchY:Double = 1
    func validated() -> ScenePresentation {
        guard [scale,x,y,yaw,pitch,roll,stretchX,stretchY].allSatisfy(\.isFinite) else { return Self() }
        var v = self
        v.scale = min(4,max(0.3,scale));v.x = min(1.5,max(-1.5,x));v.y = min(1.5,max(-1.5,y))
        v.yaw = min(180,max(-180,yaw));v.pitch = min(65,max(-65,pitch));v.roll = min(45,max(-45,roll))
        v.stretchX = min(1.5,max(0.65,stretchX));v.stretchY = min(1.5,max(0.65,stretchY));return v
    }
    static func load() -> Self { (UserDefaults.standard.data(forKey:"nativePresentation").flatMap { try? JSONDecoder().decode(Self.self,from:$0) } ?? Self()).validated() }
    func save() { if let data = try? JSONEncoder().encode(validated()) { UserDefaults.standard.set(data,forKey:"nativePresentation") } }
    func transform(base:simd_float4x4,center:SIMD3<Float>,height:Float) -> simd_float4x4 {
        let v = validated()
        func translation(_ p:SIMD3<Float>) -> simd_float4x4 { var m = matrix_identity_float4x4;m[3] = SIMD4(p,1);return m }
        let q = simd_quatf(angle:Float(v.yaw)*Float.pi/180,axis:SIMD3(0,1,0))*simd_quatf(angle:Float(v.pitch)*Float.pi/180,axis:SIMD3(1,0,0))*simd_quatf(angle:Float(v.roll)*Float.pi/180,axis:SIMD3(0,0,1))
        let s = simd_float4x4(diagonal:SIMD4(Float(v.scale*v.stretchX),Float(v.scale*v.stretchY),Float(v.scale),1))
        return base * translation(center+SIMD3(Float(v.x)*height,Float(v.y)*height,0)) * simd_float4x4(q) * s * translation(-center)
    }
}

struct NativePresentationPanel:View {
    @Binding var value:ScenePresentation
    @Binding var rotating:Bool
    let done:()->Void
    var body:some View {
        ScrollView {
            VStack(spacing:10) {
                Text("展示编辑").font(.headline)
                Picker("单指操作",selection:$rotating) { Text("移动").tag(false);Text("旋转").tag(true) }.pickerStyle(.segmented)
                Text("拖动移动或转向，双指缩放；宽高拉伸会改变显示比例。").font(.caption)
                row("大小",\.scale,0.3...4)
                row("左右",\.x,-1.5...1.5);row("上下",\.y,-1.5...1.5)
                row("左右转向",\.yaw,-180...180);row("俯仰",\.pitch,-65...65);row("侧转",\.roll,-45...45)
                row("横向拉伸",\.stretchX,0.65...1.5);row("纵向拉伸",\.stretchY,0.65...1.5)
                HStack { Button("复位") { value = ScenePresentation() };Spacer();Button("保存并完成",action:done) }
            }.padding(14)
        }.frame(maxHeight:220).background(.ultraThinMaterial,in:RoundedRectangle(cornerRadius:18)).padding(.horizontal,16)
            .accessibilityIdentifier("nativePresentationEditor")
    }
    private func row(_ title:String,_ key:WritableKeyPath<ScenePresentation,Double>,_ range:ClosedRange<Double>)->some View {
        VStack { HStack { Text(title);Spacer();Text(value[keyPath:key],format:.number.precision(.fractionLength(2))) }
            Slider(value:Binding(get:{value[keyPath:key]},set:{value[keyPath:key]=$0}),in:range)
        }.font(.caption)
    }
}
