package com.qiban.companion;

import android.graphics.Bitmap;
import com.google.android.gms.tasks.Tasks;
import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.label.ImageLabeler;
import com.google.mlkit.vision.label.ImageLabeling;
import com.google.mlkit.vision.label.defaults.ImageLabelerOptions;
import com.google.mlkit.vision.text.*;
import com.google.mlkit.vision.text.chinese.ChineseTextRecognizerOptions;
import com.google.mlkit.vision.text.japanese.JapaneseTextRecognizerOptions;
import com.google.mlkit.vision.text.latin.TextRecognizerOptions;
import java.util.*;
import java.util.concurrent.TimeUnit;

/** AppleLocalVision counterpart: user-triggered local Chinese/Japanese/Latin OCR and labels. */
final class LocalVision {
    static synchronized String analyze(Bitmap bitmap)throws Exception {
        long started=System.nanoTime();InputImage input=InputImage.fromBitmap(bitmap,0);LinkedHashSet<String> lines=new LinkedHashSet<>();
        for(int language=0;language<3;language++){
            TextRecognizer recognizer=language==0?TextRecognition.getClient(new ChineseTextRecognizerOptions.Builder().build()):language==1?TextRecognition.getClient(new JapaneseTextRecognizerOptions.Builder().build()):TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS);
            try{Text text=Tasks.await(recognizer.process(input),25,TimeUnit.SECONDS);for(Text.TextBlock block:text.getTextBlocks())for(Text.Line line:block.getLines())if(!line.getText().trim().isEmpty())lines.add(line.getText().trim());}finally{recognizer.close();}
        }
        ImageLabeler labeler=ImageLabeling.getClient(new ImageLabelerOptions.Builder().setConfidenceThreshold(.25f).build());String categories;
        try{categories=Tasks.await(labeler.process(input),20,TimeUnit.SECONDS).stream().limit(5).map(l->l.getText()+" "+Math.round(l.getConfidence()*100)+"%").collect(java.util.stream.Collectors.joining("、"));}finally{labeler.close();}
        String text=lines.stream().limit(30).collect(java.util.stream.Collectors.joining("\n"));if(text.length()>1200)text=text.substring(0,1200);
        return "本机图像观察（不代表完整场景理解）\n文字："+(text.isEmpty()?"未发现清晰文字":text)+"\n可能类别："+(categories.isEmpty()?"没有足够可信的类别":categories)+"\n耗时 "+Math.round((System.nanoTime()-started)/1e6)+" ms · Android 本机识别";
    }
}
