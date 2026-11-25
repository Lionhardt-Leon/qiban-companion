import Foundation

struct SpeechSymbolFilter:Codable,Equatable {
    var skipParentheses = true      // () / （）
    var skipAsterisks = true        // *...*
    var skipDoubleAsterisks = false // **...** (Markdown bold by default; toggle on if used for narration)
    var skipBoldBrackets = true     // 【...】
    var skipSquareBrackets = true   // [...]
    var skipAngleBrackets = false   // 《...》 / <...>
    var customPairs = ""            // space/comma separated pairs, e.g. "~~ {} 「」"
    static let defaultCall = SpeechSymbolFilter(skipParentheses:true,skipAsterisks:true,skipDoubleAsterisks:false,skipBoldBrackets:true,skipSquareBrackets:true,skipAngleBrackets:false,customPairs:"")
}

/// Display prose and spoken dialogue are different inputs. New replies supply
/// speech_zh explicitly; this parser is the conservative fallback for old text.
enum SpokenDialogue {
    static let instruction = "【朗读台词】reply 可保留角色的人设风格、动作描写和心理活动；另给 speech_zh 字符串，只写角色实际说出口的中文台词，不含动作、外貌、心理独白、说话方式说明或技术字段。纯动作／纯心理回复填空字符串，不能把旁白改成台词。即使选择日配，也保留 speech_zh，speech_ja 只翻译这些实际台词。例：reply=（她轻轻挥手，心里很高兴）“欢迎回来。”，speech_zh=欢迎回来。显示正文与台词语义必须一致，不新增对白。"
    static let textInstruction = "【朗读格式】只把角色真正说出口的台词写在中文引号“”或日文「」中；动作、外貌、心理独白及说话方式写在（圆括号）内，不给心理活动加对白引号。纯动作／心理时不编造台词。聊天显示保留完整正文，朗读只取实际台词。"
    private static let mental = ["心想","心里想","心中想","心里说","内心","心理","暗想","默想","腹诽","thought to herself","thought to himself","thinking to herself","thinking to himself"]
    private static let stageWords = ["微微","轻轻","缓缓","轻声","柔声","低声","脸颊","眼睛","眼神","眼眸","肩膀","指尖","双唇","唇角","嘴角","抬手","抬起","低头","转身","转过","垂下","偏过","侧过","看着","望着","笑着","笑了","说道","说着","回答道","问道","心想","心里","内心","默默","呼吸","脸红","害羞地","smile","blush","whisper","looks at","turns","nods"]
    private static let speechTags = ["台词：","台词:","对白：","对白:","对话：","对话:","说：","说:","答：","答:","speech:"]

    static func explicit(_ input:String)->String {finish(withoutStages(prepare(input,stageEmphasis:false)))}
    static func explicit(_ input:String,filter:SpeechSymbolFilter,strictCall:Bool=false)->String {
        finish(applySymbolFilter(prepare(input,stageEmphasis:false),filter:filter,strictCall:strictCall))
    }
    static func dialogue(_ input:String,filter:SpeechSymbolFilter,strictCall:Bool=false)->String {
        let filtered=applySymbolFilter(prepare(input,stageEmphasis:false),filter:filter,strictCall:strictCall)
        let quotes=quoted(filtered)
        guard !quotes.isEmpty else{return finish(remainder(filtered))}
        var outside="",cursor=filtered.startIndex
        for quote in quotes {outside+=filtered[cursor..<quote.start];cursor=quote.end};outside+=filtered[cursor...]
        let wrapped=outside.trimmingCharacters(in:.whitespacesAndNewlines.union(.punctuationCharacters)).isEmpty
        guard wrapped || narration(outside) || quotes.contains(where:{isMental($0.before)}) else{return finish(remainder(filtered))}
        var pieces:[String]=[],previous=filtered.startIndex
        for quote in quotes {
            let prose=remainder(String(filtered[previous..<quote.start]))
            if hasWords(prose){pieces.append(prose)}
            if !isMental(quote.before) {let line=explicit(quote.text,filter:filter,strictCall:strictCall);if hasWords(line){pieces.append(line)}}
            previous=quote.end
        }
        let tail=remainder(String(filtered[previous...]));if hasWords(tail){pieces.append(tail)}
        return finish(pieces.joined(separator:"\n"))
    }
    private static func applySymbolFilter(_ input:String,filter:SpeechSymbolFilter,strictCall:Bool)->String {
        var value=input
        let skipParen=strictCall || filter.skipParentheses
        let skipStar=strictCall || filter.skipAsterisks
        let skipDoubleStar=filter.skipDoubleAsterisks
        let skipBold=strictCall || filter.skipBoldBrackets
        let skipSquare=strictCall || filter.skipSquareBrackets
        let skipAngle=filter.skipAngleBrackets
        // 1. Asterisks (**...** optional, *...* stage directions)
        if skipDoubleStar {
            value=value.replacingOccurrences(of:#"(?s)\*\*[^*\n]{1,300}\*\*"#,with:"",options:.regularExpression)
        }
        if skipStar {
            value=value.replacingOccurrences(of:#"(?s)(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)"#,with:"",options:.regularExpression)
        }
        // 2. Bracketed pairs
        var closing:[Character:Character]=[:]
        if skipParen {closing["（"]="）";closing["("]=")"}
        if skipBold {closing["【"]="】"}
        if skipSquare {closing["["]="]"}
        if skipAngle {closing["《"]="》";closing["<"]=">"}
        if !closing.isEmpty {
            value=stripBracketPairs(value,closing:closing)
        }
        // 3. Unwrap brackets that user opted to READ aloud (strip punctuation marks only, keep inner text)
        var unwrap=""
        if !skipParen {unwrap+="()（）"}
        if !skipBold {unwrap+="【】"}
        if !skipSquare {unwrap+="[]"}
        if !unwrap.isEmpty {
            value=value.filter{!unwrap.contains($0)}
        }
        // 4. Custom pairs (e.g. "~~ {} 「」 //")
        let tokens=filter.customPairs.components(separatedBy:CharacterSet.whitespacesAndNewlines.union(CharacterSet(charactersIn:",，;；"))).filter{!$0.isEmpty}
        for token in tokens.prefix(12) {
            let open:String,close:String
            if token.contains("|") {
                let parts=token.split(separator:"|",maxSplits:1).map(String.init)
                guard parts.count==2,!parts[0].isEmpty,!parts[1].isEmpty else{continue}
                open=parts[0];close=parts[1]
            } else {
                let chars=Array(token)
                if chars.count==2 {open=String(chars[0]);close=String(chars[1])}
                else if chars.count==4 {open=String(chars[0...1]);close=String(chars[2...3])}
                else if chars.count==1 {open=token;close=token}
                else {continue}
            }
            let pattern="(?s)"+NSRegularExpression.escapedPattern(for:open)+".*?"+NSRegularExpression.escapedPattern(for:close)
            value=value.replacingOccurrences(of:pattern,with:"",options:.regularExpression)
        }
        return value
    }
    private static func stripBracketPairs(_ text:String,closing:[Character:Character])->String {
        var result="",index=text.startIndex
        while index<text.endIndex {
            let c=text[index]
            guard let end=closing[c] else{result.append(c);index=text.index(after:index);continue}
            var stack=[end],scan=text.index(after:index)
            while scan<text.endIndex {
                let item=text[scan]
                if let close=closing[item]{stack.append(close);if stack.count>32{return result}}
                else if item==stack.last {stack.removeLast();if stack.isEmpty{break}}
                scan=text.index(after:scan)
            }
            guard scan<text.endIndex else{break}
            index=text.index(after:scan)
        }
        return result
    }
    static func dialogue(_ input:String)->String {
        let text=withoutStages(prepare(input)),quotes=quoted(text)
        guard !quotes.isEmpty else{return finish(remainder(text))}
        var outside="",cursor=text.startIndex
        for quote in quotes {outside+=text[cursor..<quote.start];cursor=quote.end};outside+=text[cursor...]
        // An inline quoted word is still part of the spoken sentence:
        // 你叫我“宝贝”，我听见了。 Do not reduce it to just 宝贝.
        let wrapped=outside.trimmingCharacters(in:.whitespacesAndNewlines.union(.punctuationCharacters)).isEmpty
        guard wrapped || narration(outside) || quotes.contains(where:{isMental($0.before)}) else{return finish(remainder(text))}
        var pieces:[String]=[],previous=text.startIndex
        for quote in quotes {
            let prose=remainder(String(text[previous..<quote.start]))
            if hasWords(prose){pieces.append(prose)}
            if !isMental(quote.before) {let line=explicit(quote.text);if hasWords(line){pieces.append(line)}}
            previous=quote.end
        }
        let tail=remainder(String(text[previous...]));if hasWords(tail){pieces.append(tail)}
        return finish(pieces.joined(separator:"\n"))
    }
    private static func prepare(_ input:String,stageEmphasis:Bool=true)->String {
        var value=input
        var patterns=[#"```[\s\S]*?```"#,#"(?is)<(think|analysis|reasoning)>[\s\S]*?(?:</\1>|$)"#,#"https?://\S+"#]
        if stageEmphasis {patterns.append(#"(?s)(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)"#)}
        for pattern in patterns {
            value=value.replacingOccurrences(of:pattern,with:"",options:.regularExpression)
        }
        return value
    }
    private static func withoutStages(_ text:String)->String {
        let closing:[Character:Character]=["（":"）","(":")","【":"】","[":"]"]
        var result="",index=text.startIndex
        while index<text.endIndex {
            let c=text[index]
            guard let end=closing[c] else{result.append(c);index=text.index(after:index);continue}
            var stack=[end],scan=text.index(after:index);let begin=scan
            while scan<text.endIndex {
                let item=text[scan]
                if let close=closing[item]{stack.append(close);if stack.count>32{return result}}else if item==stack.last {stack.removeLast();if stack.isEmpty{break}}
                scan=text.index(after:scan)
            }
            // An unfinished direction is not a reason to read its contents.
            guard scan<text.endIndex else{break}
            let inner=String(text[begin..<scan]).trimmingCharacters(in:.whitespacesAndNewlines)
            if c=="（" || c=="(" {
                if let tag=speechTags.first(where:{inner.lowercased().hasPrefix($0)}) {result+=" "+explicit(String(inner.dropFirst(tag.count)))+" "}
                else if !isMental(inner),!quoted(inner).isEmpty {result+=" "+dialogue(inner)+" "}
                else if directParenthesis(inner) {result+=" "+inner+" "}
            }
            index=text.index(after:scan)
        }
        return result
    }
    private static func directParenthesis(_ value:String)->Bool {
        guard !isMental(value),!value.contains("想了想"),!stageWords.contains(where:{value.lowercased().contains($0)}),
              value.range(of:#"^(?:我|你|我们|咱|你好|欢迎|嗯|唔|谢谢|对不起|别|请|おかえり|ただいま|うん|はい)"#,options:.regularExpression) != nil else{return false}
        return true
    }
    private struct Quote {let start:String.Index;let end:String.Index;let text:String;let before:String}
    private static func quoted(_ text:String)->[Quote] {
        let pairs:[Character:Character]=["“":"”","「":"」","『":"』","\"":"\""]
        var result:[Quote]=[],index=text.startIndex,previous=text.startIndex
        while index<text.endIndex {
            guard let close=pairs[text[index]] else{index=text.index(after:index);continue}
            let begin=text.index(after:index);var scan=begin,depth=1
            while scan<text.endIndex {
                let c=text[scan]
                if c==close {depth-=1;if depth==0{break}}
                else if text[index] != "\"",c==text[index] {depth+=1}
                scan=text.index(after:scan)
            }
            guard scan<text.endIndex else{break}
            let end=text.index(after:scan)
            result.append(Quote(start:index,end:end,text:String(text[begin..<scan]),before:String(text[previous..<index])));previous=end;index=end
        }
        return result
    }
    private static func isMental(_ text:String)->Bool {
        let value=text.lowercased().trimmingCharacters(in:.whitespacesAndNewlines)
        // Only the current attribution matters, not a previous spoken sentence.
        let tail=value.components(separatedBy:CharacterSet(charactersIn:"。！？!?\n；;")).last ?? value
        return mental.contains{tail.contains($0)}
    }
    private static func narration(_ text:String)->Bool {
        text.components(separatedBy:.newlines).contains{line in
            let value=line.trimmingCharacters(in:.whitespacesAndNewlines.union(.punctuationCharacters)).lowercased()
            if value.range(of:#"^(?:旁白|动作|心理活动|心理|内心独白|神态|外貌|身体描写|表情|舞台说明|narration|action|thoughts?)\s*[:：]"#,options:.regularExpression) != nil{return true}
            if value.range(of:#"^(?:她|他|恩雅|芬妮)[^。！？!?\n]{0,80}(?:说|问|答)[:：]?$"#,options:.regularExpression) != nil{return true}
            if value.range(of:#"^(?:她|他|少女|女孩|女人|角色|恩雅|芬妮|she\b|he\b)"#,options:.regularExpression) != nil,stageWords.contains(where:{value.contains($0)}) {return true}
            return value.range(of:#"^(?:却|又|轻声|柔声|低声|笑着)?(?:说|说道|回答|问道)\s*[:：，,]?$"#,options:.regularExpression) != nil
        }
    }
    private static func remainder(_ text:String)->String {
        text.components(separatedBy:.newlines).compactMap{line -> String? in
            let value=line.trimmingCharacters(in:.whitespacesAndNewlines)
            if narration(value){return nil}
            if let tag=speechTags.first(where:{value.lowercased().hasPrefix($0)}){return String(value.dropFirst(tag.count))}
            return value
        }.joined(separator:"\n")
    }
    private static func finish(_ text:String)->String {
        let value=text.replacingOccurrences(of:#"[*_`#>]"#,with:"",options:.regularExpression)
            .replacingOccurrences(of:#"[ \t]{2,}"#,with:" ",options:.regularExpression).trimmingCharacters(in:.whitespacesAndNewlines)
        return hasWords(value) ? value:""
    }
    private static func hasWords(_ text:String)->Bool {text.rangeOfCharacter(from:.letters.union(.decimalDigits)) != nil}
}
