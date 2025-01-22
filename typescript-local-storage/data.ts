/* exported todos, writeTodos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}
// it resets the list back to empty every time the page refreshes
// let todos: Todo[] = [];
let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[] {
  const todoList = localStorage.getItem('todos-storage');

  // if todo list exists
  if (todoList) {
    // typescript treat the parsed JSON as a Todos[] array of objects Todo
    return JSON.parse(todoList) as Todo[];
  } else {
    // returns an empty array if no data in local storage so JSON doesn't throw an error
    return [];
  }
  // const todosJSON:Todo[] = JSON.parse(todoList);
  // return todosJSON;
}
