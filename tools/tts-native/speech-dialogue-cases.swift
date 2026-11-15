// Representative roleplay inputs, including spoken references to body/actions.
// These exercise the actual parser, not an alternate implementation.
let legacyExamples:[(String,String)] = [
    ("（她轻轻挥手，心里很高兴）“欢迎回来。”","欢迎回来。"),
    ("她抬起手，笑着说：“欢迎回来。”","欢迎回来。"),
    ("“你好。”她轻轻挥手。\n“欢迎回来。”","你好。\n欢迎回来。"),
    ("她心里想：“别走。”却说：“晚安。”","晚安。"),
    ("她心里想：“别走。”",""),
    ("心理：我不想离开。\n“晚安。”","晚安。"),
    ("旁白：她的脸颊染上红色。\n你好呀。","你好呀。"),
    ("（她想（别着急），轻轻挥手）**你好。** (smiles (softly))","你好。"),
    ("（她笑了一下）……！？",""),
    ("*她抬起右手，心里有些害羞* “别逗我啦。”","别逗我啦。"),
    ("【动作：转过身】[害羞]“好啦。”","好啦。"),
    ("（她轻声说：“你好呀。”）","你好呀。"),
    ("（她心里想：“好想你。”）",""),
    ("（我想了想，还是没有说出口）",""),
    ("（你好呀）","你好呀"),
    ("（台词：我想你了。）","我想你了。"),
    ("（嗯，我想你了。）","嗯，我想你了。"),
    ("你好呀，没有引号也能正常说话。","你好呀，没有引号也能正常说话。"),
    ("你叫我“宝贝”，我听见了。","你叫我“宝贝”，我听见了。"),
    ("我不想抬起右手。","我不想抬起右手。"),
    ("我心里很开心。","我心里很开心。"),
    ("她今天去上班了。","她今天去上班了。"),
    ("**我很开心。**","我很开心。"),
    ("台词：欢迎回来。","欢迎回来。"),
    ("动作：她抬起手。",""),
    ("她轻轻低头，脸颊泛红。",""),
    ("<think>先想一想如何回答。</think>“你好。”","你好。"),
    ("<analysis>未闭合的内部思考",""),
    ("```json\n{\"action\":\"wave\"}\n```\n“你好。”","你好。"),
    ("（挥手）「おかえり。」","おかえり。"),
    ("『おやすみ。』","おやすみ。"),
    ("ふふ……おかえり。","ふふ……おかえり。"),
    ("She smiles and says, \"Welcome home.\"","Welcome home."),
    ("（还没写完的动作",""),
    (String(repeating:"（",count:1000)+"她说：“你好。”",""),
    (String(repeating:"“",count:10000),""),
    ("……？！",""),
    ("",""),
]
for (index,example) in legacyExamples.enumerated() {
    let result=SpokenDialogue.dialogue(example.0)
    guard result==example.1 else{fatalError("Spoken dialogue example \(index+1) failed: expected \(String(reflecting:example.1)), got \(String(reflecting:result))")}
}
let explicitExamples:[(String,String)] = [
    ("我的脸有点红，但我还是想见你。","我的脸有点红，但我还是想见你。"),
    ("你能帮我抬起右手吗？","你能帮我抬起右手吗？"),
    ("你叫我“宝贝”，我听见了。","你叫我“宝贝”，我听见了。"),
    ("（轻轻挥手）欢迎回来。","欢迎回来。"),
    ("（smiles (softly)）おかえり。","おかえり。"),
    ("*欢迎回来。*","欢迎回来。"),
    ("",""),
]
for (index,example) in explicitExamples.enumerated() {
    let result=SpokenDialogue.explicit(example.0)
    guard result==example.1 else{fatalError("Explicit speech example \(index+1) failed: expected \(String(reflecting:example.1)), got \(String(reflecting:result))")}
}
print("Spoken dialogue examples: \(legacyExamples.count+explicitExamples.count) passed; no simulator, voice model or network used.")
