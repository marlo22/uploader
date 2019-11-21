var _uploaderDOMFunctions = (function () {
  'use strict';

  function handleSendButton() {
    var confirmCheckbox = document.getElementById('ownConfirm');
    var submitButton = document.getElementById('submitFileBtn');
    var uploaderInput = document.getElementById('uploaderInput');

    if (confirmCheckbox.checked && uploaderInput.files.length) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  function handleUploaderInputChange(e) {
    var confirmCheckbox = document.getElementById('ownConfirm');
    var submitButton = document.getElementById('submitFileBtn');
    var file = e.target.files[0];
    var label = document.getElementById('uploaderLabel');
    label.textContent = file.name;

    if (confirmCheckbox.checked && file) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  var listeners = [{
    element: document.getElementById('ownConfirm'),
    event: 'change',
    handler: handleSendButton
  }, {
    element: document.getElementById('uploaderInput'),
    event: 'change',
    handler: handleUploaderInputChange
  }];
  listeners.forEach(function (_ref) {
    var element = _ref.element,
        event = _ref.event,
        handler = _ref.handler;
    if (!element) return;
    element.addEventListener(event, handler);
  });

  var main = {

  };

  return main;

}());
