import React, { useEffect, useState } from "react";
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

  const [completedTodos, setCompletedTodos] = useState([]);
  const [pendingTodos, setPendingTodos] = useState([]);

  useEffect(() => {
    console.log("Todo modified");
    // Get the completed todos.
    // ...
    // const completed = todos.filter((todo) => {
    //   if (todo.completed === true) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    const completed = todos.filter((todo) => todo.completed);
    const notCompleted = todos.filter((todo) => !todo.completed);

    setPendingTodos(notCompleted);
    setCompletedTodos(completed);
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      // Check duplicate
      const foundIndex = todos.findIndex((todo) => {
        if (todo.name == inputValue) {
          return true;
        } else {
          return false;
        }
      });

      if (foundIndex === -1) {
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
        alert("Task already exists. Add a different one!");
      }
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

  const handleDelete = (id) => {
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

    const modifiedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(modifiedTodos);
  };

  const handleUndo = (id) => {
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
          completed: false
        };
      } else {
        return todo;
      }
    });

    setTodos(modifiedTodos);
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
        {pendingTodos.length === 0
          ? "No todos"
          : pendingTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                id={todo.id}
                name={todo.name}
                completed={todo.completed}
                onCheckClick={handleCheck}
                onDeleteClick={handleDelete}
              />
            ))}
      </div>
      <h1>Completed Todos</h1>
      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap"
        }}
      >
        {/* Display todos */}
        {completedTodos.length === 0
          ? "No todos"
          : completedTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                id={todo.id}
                name={todo.name}
                completed={todo.completed}
                onCheckClick={handleCheck}
                onDeleteClick={handleDelete}
                onUndoClick={handleUndo}
              />
            ))}
      </div>
    </div>
  );
}
