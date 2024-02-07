import CreateButton from "./CreateButton";
import React, { useState } from "react";

export default function Sidebar({ onCreate }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <CreateButton onClick={() => onCreate(true)}>
          + Add Project
        </CreateButton>
      </div>
      <ul className="mt-8"></ul>
    </aside>
  );
}
