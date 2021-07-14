import React from "react";
import "./todocard.css";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";

export default function TodoCard() {
  return (
    <div className="todocard--container">
      <h3>Name of the task</h3>
      <div className="todocard--buttons">
        <button>
          <CheckIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}
