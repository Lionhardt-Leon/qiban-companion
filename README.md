# 栖伴 / Qiban Companion

iOS companion runtime with user-selected local character packages and a configurable chat endpoint. Includes opt-in on-device speech recognition, sound classification, approximate camera gaze and bounded visual touch springs. Camera frames and raw microphone audio are not uploaded; recognized text or sound labels may be sent to the endpoint selected by the user.

This repository contains runtime code and synthetic tests only. No game models, voices, textures, extracted shaders, account credentials, research files or private development history are distributed. Import only resources you are authorized to use. This project is not affiliated with any game publisher.

Build using XcodeGen and Xcode, or the manually dispatched standard macOS Actions workflow. The three compatibility secrets configure bundle identity, private storage namespace and keychain service for existing installations; use your own identifiers for a new installation. Build results are unsigned and saved to a draft release.

The real-device camera, microphone, latency and touch appearance require device validation. This is not a full soft-body simulator or a copy of a commercial application's call service.

Third-party components retain the notices in `web/THIRD-PARTY-LICENSES.txt`. No blanket redistribution license is granted for third-party model resources or for this project's code by this README.
