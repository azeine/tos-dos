const vh = window.innerHeight
const todoItem = document.querySelector('.todoItem')
const html = todoItem.outerHTML

document.documentElement.style.setProperty('--vh', `${vh}px`)

function addTodo() {
  todoItem.insertAdjacentHTML("afterend", html)
}

function rmvTodo() {

}