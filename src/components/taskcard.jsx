import { useState } from "react";

function TaskCard({ task, deleteTask, moveTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    if (!newText.trim()) return;
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`card ${task.priority}`}>
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          autoFocus
        />
      ) : (
        <p onClick={() => setIsEditing(true)}>{task.text}</p>
      )}

      <div className="buttons">
        {task.status !== "todo" && (
          <button onClick={() => moveTask(task.id, "todo")}>
            To Do
          </button>
        )}

        {task.status !== "inprogress" && (
          <button onClick={() => moveTask(task.id, "inprogress")}>
            In Progress
          </button>
        )}

        {task.status !== "done" && (
          <button onClick={() => moveTask(task.id, "done")}>
            Done
          </button>
        )}

        <button onClick={() => deleteTask(task.id)}>X</button>
      </div>
    </div>
  );
}

export default TaskCard;
