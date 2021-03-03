import { myLibrary, showAlert, displayLibrary } from './dom';

const { newBookForm } = document.forms;
const submit = document.querySelector('#form-button');

function Book(author, title, pages, read) {
  return {
    author, title, pages, read,
  };
}

const addBookToLibrary = (CurrentBook) => {
  myLibrary.push(CurrentBook);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  displayLibrary(myLibrary);
  return false;
};

displayLibrary(myLibrary);

submit.onclick = () => {
  const title = newBookForm.querySelector('input[name="title"').value;
  const author = newBookForm.querySelector('input[name="author"').value;
  const pages = newBookForm.querySelector('input[name="pages"').value;
  const possibleReadValues = newBookForm.querySelectorAll('input[name="read"]');
  let read;
  if (possibleReadValues[0].checked) {
    read = 'Read';
  } else {
    read = 'Not Read';
  }

  if (title === '' || author === '' || parseInt(pages, 10) < 1) {
    showAlert('Invalid input', 'danger');
  } else {
    const book = Book(title, author, pages, read);
    addBookToLibrary(book);
    showAlert('Book added!', 'success');
  }

  return false;
};
