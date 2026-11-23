(function () {
  'use strict';

  // Keep this loader parseable on WebViews that cannot run the home assets.
  var supported = window.QibanAndroid &&
    typeof Array.prototype.at === 'function' &&
    typeof window.structuredClone === 'function' &&
    window.crypto && typeof window.crypto.randomUUID === 'function' &&
    typeof document.getElementById('panel').showModal === 'function' &&
    typeof document.getElementById('composer').requestSubmit === 'function';

  function showUpgrade() {
    var message = document.createElement('main');
    message.setAttribute('role', 'alert');
    message.className = 'section';
    message.textContent = '当前网页组件无法运行栖伴。请在应用商店更新 Android System WebView 或 Chrome，然后重新打开栖伴。';
    document.body.textContent = '';
    document.body.appendChild(message);
  }

  if (!supported) {
    showUpgrade();
    return;
  }

  var script = document.createElement('script');
  script.src = 'home.js';
  script.onerror = showUpgrade;
  document.body.appendChild(script);
})();
