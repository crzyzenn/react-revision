import React from "react";
import "./todocard.css";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import UndoIcon from "@material-ui/icons/Undo";

export default function TodoCard({
  id,
  name,
  onCheckClick,
  completed,
  onDeleteClick,
  onUndoClick
}) {
  return (
    <div className="todocard--container">
      <h3>{name}</h3>
      {completed ? "Completed" : "Not Completed"}

      {completed ? (
        <div className="todocard--buttons">
          <button
            onClick={() => {
              onUndoClick(id);
            }}
          >
            <UndoIcon />
          </button>
        </div>
      ) : (
        <div className="todocard--buttons">
          <button
            onClick={() => {
              onCheckClick(id);
            }}
          >
            <CheckIcon />
          </button>
          <button
            onClick={() => {
              onDeleteClick(id);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
}
