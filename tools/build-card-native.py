"""Bundle our shared rules and room engine for JavaScriptCore; no Node runtime needed."""
import re
from pathlib import Path
root=Path(__file__).resolve().parents[1];game=root/'games/tycoon'
parts=[]
for name in ['engine.mjs','rooms.mjs']:
 text=(game/name).read_text(encoding='utf-8')
 text=re.sub(r'^import .*?;\s*$', '', text,flags=re.M)
 text=re.sub(r'\bexport\s+', '',text)
 parts.append(text)
body='// Generated from engine.mjs and rooms.mjs by tools/build-card-native.py.\n(function(){\n"use strict";\n'+'\n'.join(parts)+'\nglobalThis.QibanRoomRuntime={RoomCore,RULES_VERSION};\n})();\n'
(game/'native-runtime.js').write_text(body,encoding='utf-8')
print('Native phone room runtime generated')
