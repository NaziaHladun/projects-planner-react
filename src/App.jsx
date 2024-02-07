import React, { useState, useRef } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectPage from "./components/ProjectPage";

function App() {
  const [projectInfo, setProjectInfo] = useState({
    selectedProjectId: undefined,
    project: [],
  });

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
  let content = <ProjectPage project={selectedProject} />;

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
        />
        {content}
      </main>
    </>
  );
}

export default App;
