'use strict';

const addBookButton = document.querySelector('#add-book');
const modalWindow = document.querySelector('.modal');
const closeModalButton = document.querySelector('#close-modal');
const booksSection = document.querySelector('.books');
const newBookSubmit = document.querySelector('#new-book-submit');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

function toggleModal() {
  modalWindow.classList.toggle('hidden');
}
addBookButton.addEventListener('click', function () {
  toggleModal();
});
closeModalButton.addEventListener('click', function () {
  toggleModal();
});

let books = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

let html = [];
function updateLibraryDisplay(book) {
  html.push(`
      <div class="book">
        <h2>${book.title}</h2>
        <h3>By: ${book.author}</h3>
        <h4>Page count: ${book.pages}</h4>
        <h4>Read: ${book.read ? 'yes' : 'no'}</h4>
      </div>
    `);
  booksSection.innerHTML += html[html.length - 1];
}

newBookSubmit.addEventListener('click', function () {
  event.preventDefault();
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = readInput.value;
  books.push(new Book(title, author, pages, read));
  updateLibraryDisplay(books[books.length - 1]);
  toggleModal();
});
