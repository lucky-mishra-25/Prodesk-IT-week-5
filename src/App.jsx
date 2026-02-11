import { useState, useEffect } from "react";
import Column from "./components/columns";
import AddTask from "./components/addtask";

function App() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("kanbanTasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text, priority) => {
    const newTask = {
      id: Date.now(),
      text,
      status: "todo",
      priority,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="board">
      <h1>Kanban Task Board</h1>

      <AddTask addTask={addTask} />

      <div className="columns">
        <Column
          title="To Do"
          status="todo"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
          updateTask={updateTask}
        />
        <Column
          title="In Progress"
          status="inprogress"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
          updateTask={updateTask}
        />
        <Column
          title="Done"
          status="done"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default App;
