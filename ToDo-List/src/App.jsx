// App.jsx
// Mini Project: Todo List using useState and useEffect
// This component lets you add, delete, and mark todos as complete.
// It also saves your todos to localStorage so they don't disappear on refresh.

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // ---------------------------------------------------
  // STEP 1: State to hold the input field value
  // ---------------------------------------------------
  // "inputValue" stores whatever the user is currently typing
  // "setInputValue" is the function we use to update it
  const [inputValue, setInputValue] = useState("");

  // ---------------------------------------------------
  // STEP 2: State to hold the list of todos
  // ---------------------------------------------------
  // We initialize this using a function inside useState.
  // This function runs ONLY ONCE, when the component first loads.
  // Here, we try to read any previously saved todos from localStorage.
  const [todos, setTodos] = useState(() => {
    // localStorage.getItem returns a string (or null if nothing is saved)
    const savedTodos = localStorage.getItem("myTodos");

    // If there was something saved, convert it back into a JS array using JSON.parse
    // If there was nothing saved, start with an empty array
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  // ---------------------------------------------------
  // STEP 3: useEffect to save todos whenever they change
  // ---------------------------------------------------
  // This effect runs every time "todos" changes (because "todos" is in the dependency array).
  // It converts the todos array into a string using JSON.stringify
  // and saves it into localStorage under the key "myTodos".
  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
    console.log("Todos updated and saved to localStorage:", todos);
  }, [todos]); // <-- dependency array: this effect re-runs only when "todos" changes

  // ---------------------------------------------------
  // STEP 4: Function to handle adding a new todo
  // ---------------------------------------------------
  function handleAddTodo() {
    // Don't add empty todos (after removing extra spaces)
    if (inputValue.trim() === "") {
      return;
    }

    // Create a new todo object
    // Each todo has: a unique id, the text, and a "completed" status
    const newTodo = {
      id: Date.now(), // Date.now() gives a unique number based on current time
      text: inputValue,
      completed: false,
    };

    // Add the new todo to the existing todos array
    // We use the spread operator (...todos) to copy the old todos
    // and add the newTodo at the end
    setTodos([...todos, newTodo]);

    // Clear the input field after adding
    setInputValue("");
  }

  // ---------------------------------------------------
  // STEP 5: Function to toggle a todo's completed status
  // ---------------------------------------------------
  function handleToggleTodo(id) {
    // We create a new array where:
    // - if the todo's id matches the one clicked, we flip its "completed" value
    // - otherwise, we leave the todo unchanged
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  }

  // ---------------------------------------------------
  // STEP 6: Function to delete a todo
  // ---------------------------------------------------
  function handleDeleteTodo(id) {
    // filter() keeps only the todos whose id does NOT match the one being deleted
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  }

  // ---------------------------------------------------
  // STEP 7: Function to handle "Enter" key press in input
  // ---------------------------------------------------
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  }

  // ---------------------------------------------------
  // STEP 8: The JSX (what gets rendered on screen)
  // ---------------------------------------------------
  return (
    <div className="app-container">
      <h1>My Todo List</h1>

      {/* Input section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      {/* Todo list section */}
      <ul className="todo-list">
        {todos.length === 0 && <p>No todos yet. Add one above!</p>}

        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => handleToggleTodo(todo.id)}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Simple counter showing how many todos are left */}
      <p className="todo-count">
        {todos.filter((todo) => !todo.completed).length} task(s) remaining
      </p>
    </div>
  );
}

export default App;
