"""macOS code-only proof of the old semaphore disposal and new cancellation."""
import json,resource,subprocess,tempfile
from pathlib import Path
root=Path(__file__).resolve().parents[1]
with tempfile.TemporaryDirectory(prefix='speech-cancel-') as folder:
 work=Path(folder);source=work/'main.swift'
 source.write_text('''import Foundation
import Dispatch
@inline(never) func oldPlayback(){let q=DispatchSemaphore(value:2);q.wait();q.wait();q.signal();withExtendedLifetime(q){}}
oldPlayback()
''',encoding='utf-8')
 subprocess.run(['swiftc',str(source),'-o',str(work/'old')],check=True,capture_output=True)
 resource.setrlimit(resource.RLIMIT_CORE,(0,0));old=subprocess.run([str(work/'old')],capture_output=True)
 source.write_text('''import Foundation
for _ in 0..<1000 {let q=SpeechBackpressure();try q.acquire();try q.acquire();q.release();q.cancel();do{try q.acquire();fatalError("cancel ignored")}catch{}}
print("1000 cancellation/disposal cycles passed")
''',encoding='utf-8')
 subprocess.run(['swiftc',str(root/'ios/Sources/SpeechBackpressure.swift'),str(source),'-o',str(work/'new')],check=True,capture_output=True)
 new=subprocess.run([str(work/'new')],capture_output=True);assert new.returncode==0,new.stderr.decode(errors='replace')
 print(json.dumps({'oldSemaphoreExitCode':old.returncode,'oldDisposeTrapReproduced':old.returncode<0,'replacementCycles':1000,'replacementExitCode':new.returncode,'speakerAssetsIncluded':False}))
