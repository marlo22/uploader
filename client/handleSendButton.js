export default function handleSendButton() {
  const confirmCheckbox = document.getElementById('ownConfirm');
  const submitButton = document.getElementById('submitFileBtn');
  const uploaderInput = document.getElementById('uploaderInput');

  if (confirmCheckbox.checked && uploaderInput.files.length) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};