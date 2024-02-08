import React, { useState, useRef } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectPage from "./components/ProjectPage";

function App() {
  const [projectInfo, setProjectInfo] = useState({
    selectedProjectId: undefined,
    project: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectInfo((preState) => {
      const newTask = {
        text: text,
        projectId: preState.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...preState,
        tasks: [...preState.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectInfo((preState) => {
      return {
        ...preState,
        tasks: preState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const handleAddProjectStart = () => {
    setProjectInfo((preState) => {
      return {
        ...preState,
        selectedProjectId: null,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectInfo((preState) => {
      return {
        ...preState,
        selectedProjectId: id,
      };
    });
  };

  const handleProjectDelete = () => {
    setProjectInfo((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
        project: preState.project.filter(
          (project) => project.id !== projectInfo.selectedProjectId
        ),
      };
    });
  };

  const handleCancel = () => {
    setProjectInfo((preState) => {
      return {
        ...preState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddProject = (dataProject) => {
    setProjectInfo((preState) => {
      const newProject = {
        ...dataProject,
        id: Math.random(),
      };
      return {
        ...preState,
        selectedProjectId: undefined,
        project: [...preState.project, newProject],
      };
    });
  };

  const selectedProject = projectInfo.project.find(
    (project) => project.id === projectInfo.selectedProjectId
  );
  const filteredTasks = projectInfo.tasks.filter(
    (task) => task.projectId === projectInfo.selectedProjectId
  );
  let content = (
    <ProjectPage
      project={selectedProject}
      onDelete={handleProjectDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={filteredTasks}
    />
  );

  if (projectInfo.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectInfo.selectedProjectId === undefined) {
    content = <NoProject onCreate={handleAddProjectStart} />;
  }

  return (
    <>
      <main className="h-screen mt-8 flex gap-8">
        <Sidebar
          onCreate={handleAddProjectStart}
          projects={projectInfo.project}
          onSelect={handleSelectProject}
          selectedProjectId={projectInfo.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;
