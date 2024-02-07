import React, { useState } from "react";

import TaskItem from "./TaskItem";
import InputTask from "./InputTask";
import Header from "./Header";

export default function ProjectPage({ project }) {
  const [tasks, setTasks] = useState([]);

  const formattedDate = new Date(project.date).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  // function addTask() {
  //   setItems((prevItems) => {
  //     return [...prevItems];
  //   });
  // }

  // function deleteTask(id) {
  //   setItems((prevTask) => {
  //     return prevTask.filter((task, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return (
    <div className="w-[35rem] mt-16">
      <Header project={project} date={formattedDate} />
      <div>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        {/* <InputTask />
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {
            (tasks.length = 0 ? (
              <p>This project does't have any tasks yet/</p>
            ) : (
              tasks.map((task, index) => (
                <TaskItem
                  key={index + task}
                  id={index}
                  task={task}
                  onDelete={deleteTask}
                />
              ))
            ))
          }
        </ul> */}
      </div>
    </div>
  );
}
