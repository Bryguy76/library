'use strict';

const addBookButton = document.querySelector('#add-book');
const modalWindow = document.querySelector('.modal');
const closeModalButton = document.querySelector('#close-modal');

function toggleModal() {
  modalWindow.classList.toggle('hidden');
}

addBookButton.addEventListener('click', function () {
  toggleModal();
});
closeModalButton.addEventListener('click', function () {
  toggleModal();
});
