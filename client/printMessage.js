import createHtmlElem from './createHtmlElem';

function createAlertDiv(message, alertType) {
  const alertDiv = createHtmlElem({
    node: 'div',
    attrs: {
      class: `alert alert-${alertType} mt-3`,
      role: 'alert'
    }
  });

  alertDiv.textContent = message;

  const closeBtn = createHtmlElem({
    node: 'button',
    attrs: {
      type: 'button',
      class: 'close',
      'data-dismiss': 'alert',
      'aria-label': close
    }
  });

  const closeChar = createHtmlElem({
    node: 'span',
    attrs: { 'aria-hidden': true }
  });

  closeChar.innerHTML = '&times;';

  closeBtn.appendChild(closeChar);
  alertDiv.appendChild(closeBtn);

  return alertDiv;
}

export default function printMessage(message, type = 'danger') {
  const messageContainer = document.getElementById('messageContainer');
  const alertDiv = createAlertDiv(message, type);
  messageContainer.appendChild(alertDiv);
};