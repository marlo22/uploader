export default function handleUploaderInputChange(e) {
  const confirmCheckbox = document.getElementById('ownConfirm');
  const submitButton = document.getElementById('submitFileBtn');

  const file = e.target.files[0];
  const label = document.getElementById('uploaderLabel');

  label.textContent = file.name;

  if (confirmCheckbox.checked && file) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};