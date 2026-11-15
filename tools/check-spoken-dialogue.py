"""Run only the spoken-text examples against the actual Foundation parser."""
from pathlib import Path
import shutil, subprocess, tempfile

root = Path(__file__).resolve().parents[1]
swift = shutil.which('swift')
if not swift:
    raise SystemExit('Swift is required; run this focused check on the macOS build host.')
with tempfile.TemporaryDirectory(prefix='qiban-spoken-dialogue-') as directory:
    program = Path(directory) / 'main.swift'
    program.write_text((root / 'ios/Sources/SpokenDialogue.swift').read_text(encoding='utf-8') + '\n' + (root / 'tools/tts-native/speech-dialogue-cases.swift').read_text(encoding='utf-8'), encoding='utf-8')
    subprocess.run([swift, str(program)], check=True)
