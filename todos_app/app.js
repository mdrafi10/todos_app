const todoInput = document.querySelector('.todo_input')
const btn = document.querySelector('.btn')
const form = document.querySelector('.from')
const todosUl = document.querySelector('.todo_list')
const clearAll = document.querySelector('.clearAll_todo')

          //...............Function Section..........//

const addTodo = (text) =>{
    if (text) {
        const newTodo = `
        <div class="todo">
           
           <li class="stodo">
                <span>${text}</span>
                  <div class="icons">
                     <i class="fas fa-edit editTodo">
                     </i><i class="fas fa-trash-alt deleteTodo"></i>
                  </div>
            </li>
        </div>
        `
        todosUl.innerHTML += newTodo;
        todoInput.value = ''
        todoInput.focus()
        
    }
}
const deleteTodo1 = () =>{
    return alert('Are you sure! deleted your Todo?')
} 
const editTodo1 = (text) =>{
    let newTodo = prompt('Edit todo', text.trim())
    if (!newTodo) {
        newTodo = prompt('Edit todo', text.trim())
    }else{
        return newTodo
    }
}

// Function: addTodoInLocalStorage()
// function addTodoInLocalStorage(newTodo){
//     let todos;

//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     }else{
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(newTodo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }
// function getTodo localStorage
function getTodo(){
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((todo) => {
        addTodo(todo)
    });
}
// RemoveFrom LocalStroage Function
function removeFromLocalStroge(todoItem){
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((todo,index) => {
        if (todoItem.textContent === todo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}


         //...............Function Section End..........//

         //...............Event Section Start..........//

todosUl.addEventListener('click', (e) =>{
    console.log(e);
    if (e.target.classList.contains('stodo')) {
        e.target.classList.toggle('completeTodo')
    }
    if (e.target.nodeName === 'SPAN') {
        e.target.classList.toggle('completeTodo')
    }
    if (e.target.classList.contains('deleteTodo')) {
        deleteTodo1(e.target.parentElement.parentElement.parentElement.remove());
        removeFromLocalStroge(e.target.parentElement.parentElement.parentElement);
    }
    if (e.target.classList.contains('editTodo')) {
        const editedTodo = editTodo1(e.target.parentElement.parentElement.parentElement.innerText)
        e.target.parentElement.parentElement.parentElement.innerHTML = `
        <div class="todo">
           
           <li class="stodo">
                <span>${editedTodo}</span>
                  <div class="icons">
                     <i class="fas fa-edit editTodo">
                     </i><i class="fas fa-trash-alt deleteTodo"></i>
                  </div>
            </li>
        </div>
        `
    }
    
})

form.addEventListener('submit', (e) => {
    if (todoInput.value === '') {
        alert("Please Add your todo")
    }else{
        addTodo(todoInput.value);
        // Add into Local Storage
        // addTodoInLocalStorage(todoInput.value);
    }
    e.preventDefault();
   
})
btn.addEventListener('click', () => {
    if (todoInput.value === '') {
        alert("Please Add your todo")
    }else{
        addTodo(todoInput.value)
    }
})
clearAll.addEventListener('click', () =>{
    todosUl.innerHTML = ''
})
// Dom Content Loaded
document.addEventListener('DOMContentLoad', getTodo)
         //...............Event Section End..........//