/* Portable outlines keyed by the same symbol names used in the iOS views. */
(() => {
  const paths = {
    'gearshape':'<path d="m9 3 .5-2h5l.5 2 2 1.2 2-.5 2.5 4.3-1.5 1.5v2.4l1.5 1.5-2.5 4.3-2-.5L15 18l-.5 2h-5L9 18l-2-1.2-2 .5-2.5-4.3L4 11.5V9.1L2.5 7.6 5 3.3l2 .5Z" transform="translate(0 1)"/><circle cx="12" cy="11.5" r="3.1"/>',
    'person.crop.circle':'<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="9" r="3"/><path d="M5.3 18.5c.8-5 12.6-5 13.4 0"/>',
    'figure.dance':'<circle cx="13.8" cy="3.1" r="1.5"/><path d="m11.5 7 4 4 4-1.3M12 7l-3 4-4-2M11.5 8l-.3 6-4 7M11.2 14l5 2.5 2 5"/>',
    'photo.badge.plus':'<rect x="2" y="4" width="18" height="15" rx="2"/><circle cx="7" cy="8.5" r="1.3"/><path d="m3 16 5-5 4 4 2-2"/><circle cx="18.5" cy="18" r="4.5" fill="#38333d"/><path d="M16.2 18h4.6m-2.3-2.3v4.6"/>',
    'photo':'<rect x="2" y="3" width="20" height="18" rx="2"/><circle cx="7" cy="8" r="1.5"/><path d="m3 18 6-7 4 4 3-3 5 6"/>',
    'paperplane':'<path d="m2 10 20-8-8 20-3-9-9-3Z"/><path d="m11 13 11-11"/>',
    'video.slash':'<path d="M7 5h7a2 2 0 0 1 2 2v2l6-4v14l-4-3M16 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7M1 1l22 22"/>',
    'video.fill':'<rect x="2" y="5" width="14" height="14" rx="2"/><path d="m16 10 6-5v14l-6-5Z"/>',
    'mic':'<rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/>',
    'phone.down.fill':'<path d="M3 17c5-5 13-5 18 0l2-4c-6-7-16-7-22 0Z"/>',
    'globe':'<circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20M4 6h16M4 18h16"/>',
    'bubble.left.and.bubble.right':'<path d="M13 3H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1v4l4-4h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/><path d="M17 7h3a2 2 0 0 1 2 2v10h-3v3l-4-3h-4"/>',
    'suit.spade.fill':'<path d="M12 1C9 5 2 8 2 13a5 5 0 0 0 9 3c0 3-1 5-3 6h8c-2-1-3-3-3-6a5 5 0 0 0 9-3c0-5-7-8-10-12Z" fill="currentColor" stroke="none"/>',
    'chevron.left':'<path d="m15 3-9 9 9 9"/>','chevron.right':'<path d="m9 4 8 8-8 8"/>',
    'plus.bubble':'<path d="M20 3H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2v4l5-4h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/><path d="M8 11h8m-4-4v8"/>',
    'checkmark.circle.fill':'<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="m7 12 3 3 7-7" stroke="var(--indigo,#5856d6)"/>',
    'arrow.triangle.2.circlepath':'<path d="M3 10a9 9 0 0 1 16-4l2 3m0-6v6h-6M21 14A9 9 0 0 1 5 18l-2-3m0 6v-6h6"/>',
    'person.text.rectangle':'<rect x="1.5" y="3" width="21" height="18" rx="2"/><circle cx="7" cy="9" r="2"/><path d="M3.5 16c0-4 7-4 7 0m3-8H20m-6.5 4H20m-6.5 4H19"/>',
    'person.crop.rectangle.stack':'<rect x="2" y="5" width="17" height="16" rx="2"/><path d="M7 2h13a2 2 0 0 1 2 2v13"/><circle cx="10" cy="11" r="2.5"/><path d="M4.5 19c0-5 11-5 11 0"/>',
    'slider.horizontal.3':'<path d="M2 5h20M2 12h20M2 19h20"/><path d="M7 2v6m10 1v6M10 16v6" stroke-width="3"/>',
    'speaker.wave.2':'<path d="m11 3-6 5H2v8h3l6 5ZM16 7c3 3 3 7 0 10m3-13c5 5 5 11 0 16"/>',
    'heart.text.square':'<rect x="2" y="2" width="20" height="20" rx="3"/><path d="M8 12c-7-4-2-8 0-5 2-3 7 1 0 5Zm5-5h6m-6 5h6M5 17h14"/>',
    'book':'<path d="M12 5c-3-3-8-3-10-2v17c4-1 8-1 10 2 2-3 6-3 10-2V3c-3-1-7-1-10 2Zm0 0v17"/>',
    'sun.max':'<circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    'pip':'<rect x="1.5" y="4" width="21" height="16" rx="2"/><rect x="12" y="12" width="8" height="6" rx=".5"/>',
    'music.note':'<path d="M10 18V4l11-2v14M10 7l11-2"/><ellipse cx="6.5" cy="19" rx="3.5" ry="2.5"/><ellipse cx="17.5" cy="17" rx="3.5" ry="2.5"/>',
    'network':'<circle cx="12" cy="4" r="2.5"/><circle cx="4" cy="19" r="2.5"/><circle cx="20" cy="19" r="2.5"/><path d="M12 7v5H4v4m8-4h8v4"/>',
    'waveform':'<path d="M2 9v6m4-9v12m4-16v20m4-17v14m4-11v8m4-6v4"/>',
    'square.and.arrow.up.on.square':'<path d="M7 10H3v12h14v-4M12 8l5-6 5 6m-5-6v13M10 11v6h12v-6"/>',
    'sparkles':'<path d="m12 1 2.5 7.5L22 11l-7.5 2.5L12 21l-2.5-7.5L2 11l7.5-2.5ZM21 2v4m-2-2h4"/>',
    'arrow.up.circle.fill':'<circle cx="12" cy="12" r="10" fill="currentColor" stroke="none"/><path d="M12 18V6m-5 5 5-5 5 5" stroke="#fff"/>',
    'person.and.background.dotted':'<path d="M3 3h1m3 0h1m3 0h1m3 0h1m3 0h2M3 7v1m0 3v1m0 3v1m0 3v2h2m3 0h1m3 0h1m3 0h1m3 0h1v-2m0-3v-1m0-3v-1m0-3V7"/><circle cx="12" cy="9" r="3"/><path d="M6 19v-2c0-5 12-5 12 0v2"/>',
    'stop':'<rect x="6" y="6" width="12" height="12" rx="1" fill="currentColor"/>','heart':'<path d="M12 21C-8 9 5-3 12 5c7-8 20 4 0 16Z"/>','plus':'<path d="M12 4v16M4 12h16"/>',
    'arkit':'<path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
    'rotate':'<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M19 6a7 7 0 0 1 2 5m-1 4-2-1 1-2"/>',
    'eye':'<path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    'eye.slash':'<path d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.2 4.2M9.9 5.3A10.7 10.7 0 0 1 12 5.5c6.2 0 10 6.5 10 6.5a18 18 0 0 1-4.1 4.8M6.6 6.6A18.3 18.3 0 0 0 2 12s3.8 6.5 10 6.5a10.4 10.4 0 0 0 3.7-.7"/>',
    'xmark':'<path d="M6 6l12 12M18 6 6 18"/>'
  };
  const icon = (name,extra='') => `<svg class="icon ${extra}" viewBox="0 0 24 24" aria-hidden="true">${paths[name]||paths.sparkles}</svg>`;
  window.QibanUI={icon,hydrate(root=document){for(const e of root.querySelectorAll('[data-icon]'))e.innerHTML=icon(e.dataset.icon);}};
  document.addEventListener('DOMContentLoaded',()=>window.QibanUI.hydrate());
})();
