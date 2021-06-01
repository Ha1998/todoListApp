const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList= document.querySelector('.todo-list')





todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)








function addTodo(event) {
    event.preventDefault()
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const compeletedButton = document.createElement('button')
    compeletedButton.innerHTML = '<i class="fas fa-check"></i>'
    compeletedButton.classList.add("complete-btn")
    todoDiv.appendChild(compeletedButton)


    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)


    todoList.appendChild(todoDiv)


    // Clear input value 
    todoInput.value = ""

}

function deleteCheck (e) {
    const item = e.target
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.remove()
    }
}