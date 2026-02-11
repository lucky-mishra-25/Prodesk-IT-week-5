import { useState } from "react";

function AddTask({ addTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask(text, priority);
    setText("");
    setPriority("medium");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="Enter new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default AddTask;
