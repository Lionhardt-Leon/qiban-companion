# 栖伴 / Qiban Companion

iOS companion runtime with user-selected local character packages and a configurable chat endpoint. Includes opt-in on-device speech recognition, sound classification, rear main-camera preview and bounded visual touch springs. With video enabled, sending a text or voice turn (or pressing the look-at-camera button) sends one current JPEG to the user-selected endpoint, which must support image input. Images are not stored in chat backups. Raw microphone audio is not uploaded; recognized text or sound labels may be sent to the selected endpoint. Camera-based gaze estimation has been removed; local touch gaze remains.

Mood metadata and unified source-action intents can start movements with actual speech playback. A prose-only reply can trigger one bounded metadata-only follow-up request to the selected endpoint; images and the full history are not resent. Character placement can be edited independently of a local scene.

This repository contains runtime code and synthetic tests only. No game models, voices, textures, extracted shaders, account credentials, research files or private development history are distributed. Import only resources you are authorized to use. This project is not affiliated with any game publisher.

Build using XcodeGen and Xcode, or the manually dispatched standard macOS Actions workflow. The three compatibility secrets configure bundle identity, private storage namespace and keychain service for existing installations; use your own identifiers for a new installation. Build results are unsigned and saved to a draft release.

The real-device camera, microphone, latency and touch appearance require device validation. This is not a full soft-body simulator or a copy of a commercial application's call service.

Third-party components retain the notices in `web/THIRD-PARTY-LICENSES.txt`. No blanket redistribution license is granted for third-party model resources or for this project's code by this README.
