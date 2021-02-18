const myLibrary = [];
const { newBookForm } = document.forms;

const submit = document.querySelector('#form-button');

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = (CurrentBook) => {
  myLibrary.push(CurrentBook);
  return false;
};

const deleteGroup = (book, card) => {
  const createBtn = document.createElement('button');

  createBtn.addEventListener('click', () => {
    card.parentNode.removeChild(card);
    if (myLibrary.indexOf(book) !== -1) {
      myLibrary.splice(myLibrary.indexOf(book), 1);
    }
  });

  createBtn.textContent = 'Delete';
  createBtn.setAttribute('class', 'btn btn-danger mr-2 ml-3');
  card.appendChild(createBtn);
};

function readStatus(book, card) {
  const createBtn = document.createElement('button');

  createBtn.addEventListener('click', () => {
    const status = card.querySelector('.read-status');
    if (book.read === 'Read') {
      status.textContent = 'Not Read';
      book.read = 'Not Read';
    } else {
      status.textContent = 'Read';
      book.read = 'Read';
    }
  });

  createBtn.textContent = 'Toggle status';
  createBtn.setAttribute('class', 'btn btn-success');
  card.appendChild(createBtn);
}

const displayBook = (book) => {
  const BookGroup = document.querySelector('#book-group');
  const card = document.createElement('div');
  card.className = 'card m-2';

  const cardbody = document.createElement('div');
  cardbody.className = 'card-body';

  const title = document.createElement('p');
  title.className = 'card-title';

  const author = document.createElement('h5');
  author.className = 'card-text';

  const pages = document.createElement('p');
  pages.className = 'card-text';

  const read = document.createElement('p');
  read.className = 'card-text read-status';

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} Pages`;
  read.textContent = book.read;

  cardbody.appendChild(author);
  cardbody.appendChild(title);
  cardbody.appendChild(pages);
  cardbody.appendChild(read);

  card.appendChild(cardbody);
  readStatus(book, card);
  deleteGroup(book, card);
  BookGroup.appendChild(card);
};

showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;

  div.appendChild(document.createElement('message'));
  const container = document.querySelector('.container');
  const form = document.querySelector('#newBookForm');
  container.insertBefore(div, form);

  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;

if (title === '', author === '', pages === '') {
  showAlert('Please fill the bank fields', 'danger');
} else {
  const book = new Book(title, author, pages);
}

showAlert('Book added', 'success');

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
  const book = new Book(title, author, pages, read);
  displayBook(book);
  addBookToLibrary(book);
  return false;
};
