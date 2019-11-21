const listeners = [
  {
    element: document.getElementById('ownConfirm'),
    event: 'change',
    handler: require('./handleSendButton')
  },
  {
    element: document.getElementById('uploaderInput'),
    event: 'change',
    handler: require('./handleUploadInputChange')
  }
];

listeners.forEach(({ element, event, handler }) => {
  if (!element) return;
  element.addEventListener(event, handler);
});