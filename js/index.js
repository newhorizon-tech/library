let myLibrary = [];

const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const submit = document.querySelector('#submit');

function Book(name, title, pages, read) {
  this.name = name;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  
  read.checked
}

submit.onclick = addBookToLibrary;
