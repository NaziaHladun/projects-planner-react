import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";

function App() {
  const [newProject, setNewProject] = useState(false);

  function createNewProject() {
    setNewProject(true);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onCreate={setNewProject} />
        {newProject ? (
          <NewProject onCancel={setNewProject} />
        ) : (
          <NoProject onCreate={setNewProject} />
        )}
      </main>
    </>
  );
}

export default App;
