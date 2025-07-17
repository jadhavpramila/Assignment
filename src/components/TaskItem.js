import React, { useState } from "react";
import { format, parseISO } from "date-fns";

function TaskItem({ task, onUpdateTask, onDeleteTask }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);
  const formattedDate = task.dueDate
    ? format(parseISO(task.dueDate), "PPpp")
    : "";
  const toggleComplete = () => {
    onUpdateTask(task.id, { ...task, completed: !task.completed });
  };

  const saveEdit = () => {
    onUpdateTask(task.id, { ...task, text });
    setEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      {editing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}>
            {task.text}
          </span>
          <span> (Due: {formattedDate}) </span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
