import React from "react";
import "./todocard.css";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";

export default function TodoCard({ id, name, onCheckClick, completed }) {
  return (
    <div className="todocard--container">
      <h3>{name}</h3>
      {completed ? "Completed" : "Not Completed"}

      <div className="todocard--buttons">
        <button
          onClick={() => {
            onCheckClick(id);
          }}
        >
          <CheckIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
