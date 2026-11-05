import Foundation

// Cancellation must not destroy a counting semaphore with borrowed permits.
// This condition has no balanced-dispose requirement and wakes every waiter.
final class SpeechBackpressure:@unchecked Sendable {
    private let condition=NSCondition()
    private let capacity:Int
    private var available:Int
    private var cancelled=false
    init(capacity:Int=2){self.capacity=max(1,capacity);available=max(1,capacity)}
    func acquire() throws {
        condition.lock();defer{condition.unlock()}
        while available==0 && !cancelled {condition.wait()}
        guard !cancelled else{throw CancellationError()};available-=1
    }
    func release(){condition.lock();available=min(capacity,available+1);condition.signal();condition.unlock()}
    func cancel(){condition.lock();cancelled=true;condition.broadcast();condition.unlock()}
}
