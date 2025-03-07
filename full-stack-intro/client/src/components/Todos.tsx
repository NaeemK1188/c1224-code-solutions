/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
/* eslint-disable @typescript-eslint/no-empty-function -- Remove me */
import { useEffect, useState } from 'react';
import { PageTitle } from './PageTitle';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export type UnsavedTodo = {
  task: string;
  isCompleted: boolean;
};
export type Todo = UnsavedTodo & {
  todoId: number;
};

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  /* Implement useEffect to fetch all todos. Hints are at the bottom of the file. */
  useEffect(() => {
    async function loadTodo() {
      try {
        const response = await fetch('/api/todos');
        if (!response.ok) {
          throw new Error(`Response status:${response.status}`);
        }

        //else
        const responseData = (await response.json()) as Todo[];
        setTodos(responseData);
      } catch (error) {
        console.error(error); // to report the error
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadTodo();
  }, []);

  /* Implement addTodo to add a new todo. Hints are at the bottom of the file. */
  // addTodo is at the bottom on onSubmit
  async function addTodo(newTodo: UnsavedTodo) {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo), // stringify the body which is newTodo
      });
      if (!response.ok) {
        throw new Error(`Response status:${response.status}`);
      }
      const responseData = (await response.json()) as Todo;
      console.log(responseData);
      setTodos(todos.concat(responseData));
      // or
      //setTodos([...todos, responseData]);
    } catch (error) {
      alert(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  /* Implement toggleCompleted to toggle the completed state of a todo. Hints are at the bottom of the file. */
  // to add check mark on finished task
  async function toggleCompleted(todo: Todo) {
    // update what in the page manually and we need to refresh every time to see the changes
    // while in setTodos we are constantly updating the page
    todo.isCompleted = !todo.isCompleted; // update one todo and reflected in the clicked todo in the todos
    //  todo.isCompleted updating todo that is the type of state todos
    try {
      // doing fetch because we want to update the todo status to completed when its clicked

      const response = await fetch(`/api/todos/${todo.todoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo), // we update the entire todo in the data base here
      });

      if (!response.ok) {
        throw new Error(`Response status:${response.status}`);
      }

      const responseData = (await response.json()) as Todo; // reflecting the changes in the database here
      console.log(responseData);
      setTodos(
        todos.map((todo) =>
          todo.todoId === responseData.todoId ? responseData : todo
        )
      );
    } catch (error) {
      alert(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('fetch error:', error);
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }
  return (
    <div className="container">
      <div className="flex">
        <div className="px-4">
          <PageTitle text="Todo App" />
          {/* the entire form div */}
          {/*  */}
          <TodoForm onSubmit={addTodo} />
          {/* the list of todos */}
          {/* the toggleCompleted updates the state*/}
          <TodoList todos={todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}

// ----------- HINTS!!!!!!!!! ------------
/* useEffect:
 *  Use fetch to send a GET request to `/api/todos`.
 *  Once the response JSON is received and parsed,
 *  update state with the received todos.
 *  Remember to use type assertion when retrieving the JSON from the response.
 *  Handle errors correctly and set `error` to any error or error status code.
 *  Set `isLoading` to false when all network activity is finished.
 */

/* addTodo:
 *  Use fetch to send a POST request to `/api/todos`.
 *  Once the response JSON is received and parsed,
 *    - set the Todos to a _new_ array with the added Todo concatenated
 *    - handle errors appropriately (as mentioned above)
 *  Remember to use type assertion when retrieving the JSON from the response.
 *
 *  DO NOT MUTATE the original state array, nor any objects within it.
 *  Reminder: A React component will re-render if one of its state setters
 *  is called, but only if the new value is different than the old value.
 *  With arrays and objects, the new value will be different _only if_ a
 *  new array or object instance is created. That is why mutating the original
 *  state array _will not_ trigger a re-render.
 *  See https://react.dev/learn/updating-arrays-in-state for more info.
 *
 *  TIP: When calling fetch, be sure to SERIALIZE the todo object in the body
 *       with JSON.stringify() and specify the "Content-Type" header as "application/json"
 *  TIP: Use Array.prototype.concat to create a new array containing the contents
 *       of the old array, plus the object returned by the server.
 *       Alternatively, use the spread operator: `[...oldArray, addedItem]`
 */

/* toggleCompleted:
 *  Toggle the todo's "isCompleted" status.
 *  Use fetch to send a PUT request to `/api/todos/${todoId}` with the modified `todo`
 *  in the body.
 *  Once the response JSON is received and parsed,
 *    - create a shallow copy of the todos array from state
 *    - replace the old todo with the todo received from the server
 *    - handle errors appropriately (as mentioned above)
 *  Remember to use type assertion when retrieving the JSON from the response.
 *
 *  NOTE: "toggle" means to flip back and forth, so clicking a todo
 *  in the list repeatedly should "toggle" its isCompleted status back and forth.
 *
 *  DO NOT MUTATE the original state array, nor any objects within it. See above.
 *
 *  TIP: When calling fetch, be sure to SERIALIZE the todo object in the body
 *       with JSON.stringify() and specify the "Content-Type" header as "application/json"
 *  TIP: `Array.map` is a convenient way to make a copy of an array -- compare
 *       the Todo IDs and return the existing Todo if it is not the one that was
 *       just updated, and return the updated array if it is.
 */
