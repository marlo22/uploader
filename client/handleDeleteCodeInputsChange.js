export default function handleDeleteCodeInputsChange() {
  const fileUrlInputVal = document.getElementById('fileUrl').value;
  const deleteCodeInputVal = document.getElementById('deleteCode').value;
  const deleteBtn = document.getElementById('deleteFileBtn');

  if (fileUrlInputVal && deleteCodeInputVal) {
    deleteBtn.disabled = false;
  } else {
    deleteBtn.disabled = true;
  }
}