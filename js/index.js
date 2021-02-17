let myLibrary = [];
// const { form } = document.forms
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const submit = document.querySelector('#submit');

function Book (author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = () => {
  console.log('test');
  const CurrentBook = new Book(author.value, title.value, pages.value, read.checked);
  myLibrary.push(CurrentBook);
  // console.log(myLibrary);
  myLibrary.forEach(book => console.log(book.title))
  return false;
}


// displayBook = () => {

//   myLibrary.forEach(book => console.log(book.title))
    
//   const form = document.querySelector('#form');
//   const input = document.createElement('input');

//   title.textContent = book.title
//   author.textContent = book.author

  
// }

// console.log(displayBook);
submit.onclick = addBookToLibrary;
