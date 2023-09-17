'use strict';


//==============================Variable-CONST

const btnsShowModalWindow = document.querySelectorAll('.show-modal-window')
const modalWindow = document.querySelector('.modal-window')
const overlay = document.querySelector('.overlay')
const btnCloseModalWindow = document.querySelector('.close-modal-window')

//==============================Function

const closeModalWindow = () => {
   modalWindow.classList.add('hidden')
   overlay.classList.add('hidden')
}

const showModalWindow = () => {
   modalWindow.classList.remove('hidden')
   overlay.classList.remove('hidden')
}

//==============================Code

//==============================Event

for (let i = 0; i < btnsShowModalWindow.length; i++) {
   btnsShowModalWindow[i].addEventListener('click', showModalWindow)
}

btnCloseModalWindow.addEventListener('click', closeModalWindow)

overlay.addEventListener('click', closeModalWindow)

document.addEventListener('keydown', (e) => {
   if (!modalWindow.classList.contains('hidden') && e.key === 'Escape') {
      closeModalWindow()
   }
})


