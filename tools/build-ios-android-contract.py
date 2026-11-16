"""Carry the trusted iOS role/body protocol into Android without maintaining another prompt."""
from pathlib import Path
import json,re,textwrap
root=Path(__file__).resolve().parents[1]
persona=(root/'ios/Sources/Persona.swift').read_text(encoding='utf-8')
motion=(root/'ios/Sources/DialogueMotion.swift').read_text(encoding='utf-8')
body=(root/'ios/Sources/BodyCommand.swift').read_text(encoding='utf-8')
gestures=(root/'ios/Sources/BodyGesture.swift').read_text(encoding='utf-8')
def block(text,start):
    value=text.split(start,1)[1].split('"""',1)[0]
    return textwrap.dedent(value).strip()
application=block(persona,'return """\n        【栖伴应用')
application='【栖伴应用'+application
instruction=block(motion,'        return """\n        你同时控制屏幕上的伙伴。')
instruction='你同时控制屏幕上的伙伴。'+instruction
procedural=block(motion,'let procedural = actions.contains("procedural") ? """')
for old,new in {
 r'\(String(context.modelName.prefix(120)))':'{MODEL}',r'\(context.mode)':'{MODE}',r'\(String(context.activeAction.prefix(120)))':'{ACTION}',r'\(context.origin)':'{ORIGIN}',r'\(context.mood)':'{MOOD}',r'\(context.bodyStatus)':'{BODY}',r'\(map.isEmpty ? "当前没有已加载的身体动作。":map)':'{MAP}',r'\(visionInstruction(context:context,hasImage:hasImage))':'{VISION}',r'\(SpokenDialogue.instruction)':'{SPEECH}',r'\(entries.isEmpty ? "当前角色没有可用动作。" : entries)':'{ENTRIES}',r'\(procedural)':'{PROCEDURAL}',
}.items():
    application=application.replace(old,new);instruction=instruction.replace(old,new)
assert '\\(' not in application and '\\(' not in instruction
catalog=dict(re.findall(r'\("([A-Za-z0-9_]+)",\s*"([^"\n]+)"\)',motion.split('static func allowed',1)[0]))
raw_names=dict(re.findall(r'(\w+)\s*=\s*"([^"]+)"',body.split('var label',1)[0]))
catalog.update({raw_names.get(k,k):v for k,v in re.findall(r'case\s+\.([A-Za-z0-9_]+):\s*return\s*"([^"\n]+)"',body)})
catalog.update(dict(re.findall(r'\(id:\s*"([^"\n]+)",\s*meaning:\s*"([^"\n]+)"\)',gestures)))
catalog.update(dict(re.findall(r'\("([A-Za-z0-9_]+)",\s*"([^"\n]+)"\)',gestures.split('static var ids',1)[0])))
target=root/'android/app/src/main/java/com/qiban/companion/IOSPromptText.java'
target.write_text('package com.qiban.companion;\n// Generated from Persona.swift / DialogueMotion.swift. Do not edit separately.\nfinal class IOSPromptText {\n'+''.join('    static final String '+name+'='+json.dumps(value,ensure_ascii=False)+';\n' for name,value in [('APPLICATION',application),('INSTRUCTION',instruction),('PROCEDURAL',procedural),('CATALOG',json.dumps(catalog,ensure_ascii=False))])+'}\n',encoding='utf-8')
print('Android uses the iOS body protocol and '+str(len(catalog))+' trusted action descriptions')
