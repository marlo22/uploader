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

  function createHtmlElem() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        node = _ref.node,
        attrs = _ref.attrs;

    var elem = document.createElement(node);
    Object.keys(attrs).forEach(function (attr) {
      elem.setAttribute(attr, attrs[attr]);
    });
    return elem;
  }

  function createAlertDiv(message, alertType) {
    var alertDiv = createHtmlElem({
      node: 'div',
      attrs: {
        "class": "alert alert-".concat(alertType, " mt-3"),
        role: 'alert'
      }
    });
    alertDiv.textContent = message;
    var closeBtn = createHtmlElem({
      node: 'button',
      attrs: {
        type: 'button',
        "class": 'close',
        'data-dismiss': 'alert',
        'aria-label': close
      }
    });
    var closeChar = createHtmlElem({
      node: 'span',
      attrs: {
        'aria-hidden': true
      }
    });
    closeChar.innerHTML = '&times;';
    closeBtn.appendChild(closeChar);
    alertDiv.appendChild(closeBtn);
    return alertDiv;
  }

  function printMessage(message) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'danger';
    var messageContainer = document.getElementById('messageContainer');
    var alertDiv = createAlertDiv(message, type);
    messageContainer.appendChild(alertDiv);
  }

  function validFileType(mimeType) {
    var allowedTypes = window.__FILE_ALLOWED_FORMATS__.split(',');

    if (!allowedTypes.includes(mimeType)) {
      var _window = window,
          __TRANSLATIONS__ = _window.__TRANSLATIONS__;
      printMessage("".concat(__TRANSLATIONS__.notAllowedExtension, " ").concat(mimeType));
    }
  }

  function validFileSize(fileSize) {
    var _window = window,
        __FILE_MAX_SIZE__ = _window.__FILE_MAX_SIZE__,
        __TRANSLATIONS__ = _window.__TRANSLATIONS__;
    var fileSizeInKb = fileSize / 1000;

    if (__FILE_MAX_SIZE__ < fileSizeInKb) {
      var maxFileSizeInMb = __FILE_MAX_SIZE__ / 1000;
      printMessage("".concat(__TRANSLATIONS__.tooLargeFile, " ").concat(maxFileSizeInMb, " MB"));
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

    validFileType(file.type);
    validFileSize(file.size);
  }

  function handleDeleteCodeInputsChange() {
    var fileUrlInputVal = document.getElementById('fileUrl').value;
    var deleteCodeInputVal = document.getElementById('deleteCode').value;
    var deleteBtn = document.getElementById('deleteFileBtn');

    if (fileUrlInputVal && deleteCodeInputVal) {
      deleteBtn.disabled = false;
    } else {
      deleteBtn.disabled = true;
    }
  }

  function handleSearchInputChange() {
    var searchButton = document.getElementById('searchButton');

    if (this.value) {
      searchButton.disabled = false;
    } else {
      searchButton.disabled = true;
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
  }, {
    element: document.getElementById('fileUrl'),
    event: 'keyup',
    handler: handleDeleteCodeInputsChange
  }, {
    element: document.getElementById('deleteCode'),
    event: 'keyup',
    handler: handleDeleteCodeInputsChange
  }, {
    element: document.getElementById('searchInput'),
    event: 'keyup',
    handler: handleSearchInputChange
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
