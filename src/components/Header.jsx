export default function Header({ project, date }) {
  return (
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">
          {project.title}
        </h1>
        <button className="text-stone-800 hover:text-stone-950">Delete</button>
      </div>
      <p className="text-stone-400 mb-4">{date}</p>
      <p className="mt-8">{project.description}</p>
    </header>
  );
}
