// ↓↓↓ WARNING: HEADACHE AHEAD ↓↓↓ //

const vh = window.innerHeight
const todoItem = document.querySelector('.todoItem')
const insertLoc = document.querySelector('.todoInsert')
const outerTodo = todoItem.outerHTML
const removeButton = document.getElementsByClassName('rmv')
let i

document.documentElement.style.setProperty('--vh', `${vh}px`)

function addTodo() {
  insertLoc.insertAdjacentHTML("beforebegin", outerTodo)
  addRemoveFunc()
}

function addRemoveFunc() {
  for (i = 0; i < removeButton.length; i++) {
    removeButton[i].onclick = function() {
      this.parentElement.remove()
    }
  }
}
addRemoveFunc() //Allow for first todo item to be removed

function checklist(event) {
  event.target.nextElementSibling.classList.toggle('checked')
}

window.onload = function() {
  document.querySelector('.textbox').value = ''
  document.getElementById('checkbox').checked = false
} // Prevent checked state becoming true before clicked or idk, try to remove and see for yourself