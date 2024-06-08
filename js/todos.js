const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

let todos = [];

const TODOS_KEY = 'todos';

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function onDeleteTodo(event) {
  const li = event.target.parentElement
  li.remove();
  todos = todos.filter(item => item.id !== parseInt(li.id));
  saveTodo();
}

function paintTodo(newTodoObj) {
  const li = document.createElement('li');
  li.id = newTodoObj.id;
  const span = document.createElement('span');
  span.innerText = newTodoObj.text;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', onDeleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

}

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    id: Date.now(),
    text: newTodo
  }
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener('submit', onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}