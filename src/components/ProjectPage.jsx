import TaskItem from "./TaskItem";
import InputTask from "./InputTask";
import Header from "./Header";

export default function ProjectPage({
  project,
  tasks,
  onAddTask,
  onDelete,
  onDeleteTask,
}) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <Header project={project} date={formattedDate} onDelete={onDelete} />
      <div>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <InputTask onAdd={onAddTask} />
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.length <= 0 ? (
            <p>This project does't have any tasks yet.</p>
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                task={task.text}
                onDelete={onDeleteTask}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
