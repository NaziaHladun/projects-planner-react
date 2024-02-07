import React, { useState, useRef } from "react";
import Modal from "./Modal";

import Input from "./Input";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dialog = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      dialog.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };

  return (
    <>
      <Modal ref={dialog} />
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" label="title" ref={title} />
          <Input textarea type="text" label="description" ref={description} />
          <Input type="date" label="due date" ref={date} />
        </div>
      </div>
    </>
  );
}
