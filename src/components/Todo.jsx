import React, { useState } from "react";
import { uuid } from "uuidv4";

export default function Todo() {
  // Format
  // {
  //   id: 'unique_id',
  //   name: 'task name',
  //   completed: false
  // }
  console.log(uuid());
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskToAdd = {
      id: uuid(),
      name: inputValue,
      completed: false,
    };
    // setTodos(todos.push(taskToAdd));
    setTodos([...todos, taskToAdd]);
    console.log("Form Submitted", taskToAdd);
  };

  console.log(todos);
  return (
    <div>
      <h1>New Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            width: "70%",
            height: 30,
          }}
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Enter your todo"
        />
      </form>
    </div>
  );
}
