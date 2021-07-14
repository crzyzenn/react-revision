import React, { useState } from "react";
import { uuid } from "uuidv4";
import TodoCard from "./TodoCard/Index";

// 1. Display todos
// 2. Mark todos
// 3. Delete todos

export default function Todo() {
  // Format
  // [
  //   {
  //     id: 'unique_id',
  //     name: 'task name',
  //     completed: false
  //   },
  //   {
  //     id: 'unique_id',
  //     name: 'task name',
  //     completed: false
  //   }
  // ]

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      const taskToAdd = {
        id: uuid(),
        name: inputValue,
        completed: false
      };
      // setTodos(todos.push(taskToAdd));
      setTodos([...todos, taskToAdd]);

      // After task has been created reset input field
      setInputValue("");
    } else {
      alert("Please type something..");
    }
  };

  const handleCheck = (id) => {
    // todos = [
    //   {
    //     id: 'unique_id',
    //     name: 'task name',
    //     completed: false
    //   },
    //   {
    //     id: 'unique_id',
    //     name: 'task name',
    //     completed: false
    //   }
    // ]

    const modifiedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: true
        };
      } else {
        return todo;
      }
    });

    setTodos(modifiedTodos);

    console.log("Checking the task ", id, modifiedTodos);
  };

  return (
    <div>
      <h1>New Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            width: "70%",
            height: 30
          }}
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          placeholder="Enter your todo"
        />
      </form>

      {/* Todos */}
      <h1>My Todos</h1>
      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap"
        }}
      >
        {/* Display todos */}
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            onCheckClick={handleCheck}
          />
        ))}
      </div>
    </div>
  );
}
