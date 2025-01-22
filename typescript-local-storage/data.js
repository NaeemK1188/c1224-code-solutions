'use strict';
// it resets the list back to empty every time the page refreshes
// let todos: Todo[] = [];
let todos = readTodos();
function writeTodos() {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
  const todoList = localStorage.getItem('todos-storage');
  // if todo list exists
  if (todoList) {
    // typescript treat the parsed JSON as a Todos[] array of objects Todo
    return JSON.parse(todoList);
  } else {
    // returns an empty array if no data in local storage so JSON doesn't throw an error
    return [];
  }
  // const todosJSON:Todo[] = JSON.parse(todoList);
  // return todosJSON;
}
