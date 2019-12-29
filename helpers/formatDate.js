function addZeroToDate(day) {
  return day < 10 ? '0' + day : '' + day;
};

function formatMonth(value) {
  const newValue = value + 1;
  return addZeroToDate(newValue);
}

function formatDate(date) {
  const formattedDate = new Date(date);
  const day = addZeroToDate(formattedDate.getDate());
  const month = formatMonth(formattedDate.getMonth());
  const year = formattedDate.getFullYear();
  const hour = addZeroToDate(formattedDate.getHours());
  const minutes = addZeroToDate(formattedDate.getMinutes());
  const seconds = addZeroToDate(formattedDate.getSeconds());

  return `${day}/${month}/${year}, ${hour}:${minutes}:${seconds}`;
};

module.exports = {
  addZeroToDate,
  formatMonth,
  formatDate
}