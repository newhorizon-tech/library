let library = JSON.parse(localStorage.getItem('myLibrary'));

if (library == null) {
  library = [];
}

const myLibrary = library;

function deleteOption(button, book, card) {
  button.addEventListener('click', () => {
    card.parentNode.removeChild(card);
    if (myLibrary.indexOf(book) !== -1) {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    }
  });
}

function toggleStatus(button, book, card) {
  button.addEventListener('click', () => {
    const status = card.querySelector('.read-status');
    if (book.read === 'Read') {
      status.textContent = 'Not Read';
      book.read = 'Not Read';
    } else {
      status.textContent = 'Read';
      book.read = 'Read';
    }
  });
}

export { deleteOption, toggleStatus, myLibrary };
