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
const toggleReadButton = document.querySelectorAll('.toggle-read');
let books = [];
let html = [];

class Book {
  constructor(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = !!read;
  }
  toggleRead() {
    this.read = !this.read;
  }
}

function toggleModal() {
  modalWindow.classList.toggle('hidden');
}
addBookButton.addEventListener('click', function () {
  toggleModal();
});
closeModalButton.addEventListener('click', function () {
  toggleModal();
});

function addToLibraryDisplay(book) {
  html.push(`
      <div id="card${book.id}" class="book">
        <h2>${book.title}</h2>
        <h3>By: ${book.author}</h3>
        <h4>Page count: ${book.pages}</h4>
        <h4 class="book${book.id}">Read: ${book.read ? 'yes' : 'no'}</h4>
        <div class="card-buttons">
        <button class="toggle-read" id="${book.id}">Toggle Read</button>
        <button class="delete" id="delete${book.id}">Delete book</button>
        </div>
      </div>
    `);
  booksSection.innerHTML += html[html.length - 1];
}

function manageReadListeners() {
  function updateReadDisplay(bookId) {
    if (books[bookId - 1].read) {
      document.querySelector(`.book${bookId}`).textContent = 'Read: yes';
    } else {
      document.querySelector(`.book${bookId}`).textContent = 'Read: no';
    }
  }

  books.forEach(book => {
    document
      .getElementById(`${book.id}`)
      .addEventListener('click', function () {
        books[book.id - 1].toggleRead();
        updateReadDisplay(book.id);
      });
    document
      .getElementById(`delete${book.id}`)
      .addEventListener('click', function () {
        delete books[book.id - 1];
        delete html[book.id - 1];
        booksSection.removeChild(document.getElementById(`card${book.id}`));
      });
  });
}

function clearInput() {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.value = null;
}
newBookSubmit.addEventListener('click', function () {
  event.preventDefault();
  let id = books.length + 1;
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = readInput.value;
  books.push(new Book(id, title, author, pages, read));
  addToLibraryDisplay(books[books.length - 1]);
  manageReadListeners();
  toggleModal();
  clearInput();
});
