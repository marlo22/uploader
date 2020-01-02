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
  },
  {
    element: document.getElementById('fileUrl'),
    event: 'keyup',
    handler: require('./handleDeleteCodeInputsChange')
  },
  {
    element: document.getElementById('deleteCode'),
    event: 'keyup',
    handler: require('./handleDeleteCodeInputsChange')
  }
];

listeners.forEach(({ element, event, handler }) => {
  if (!element) return;
  element.addEventListener(event, handler);
});