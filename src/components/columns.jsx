import TaskCard from "./taskcard";

function Column({ title, status, tasks, deleteTask, moveTask, updateTask }) {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="column">
      <h2>{title}</h2>

      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          moveTask={moveTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}

export default Column;
