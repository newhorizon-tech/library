function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;

  div.textContent = message;
  const container = document.querySelector('.container');
  const form = document.querySelector('#newBookForm');
  container.insertBefore(div, form);

  setTimeout(() => document.querySelector('.alert').remove(), 3000);
  return false;
};

function testFunction() {
  alert('Javascript Import works!');
}

export { testFunction, showAlert}
