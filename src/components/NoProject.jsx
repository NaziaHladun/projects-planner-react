import CreateButton from "./CreateButton";

export default function NoProject({ onCreate }) {
  return (
    <div className="mt-24 text-center w-full">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src="./src/assets/no-projects.png"
        alt="project image"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or create new one.</p>
      <p>
        <CreateButton onClick={onCreate}>Create new project</CreateButton>
      </p>
    </div>
  );
}
