export default function handleSearchInputChange() {
  var searchButton = document.getElementById('searchButton');

  if (this.value) {
    searchButton.disabled = false
  } else {
    searchButton.disabled = true;
  }
};
