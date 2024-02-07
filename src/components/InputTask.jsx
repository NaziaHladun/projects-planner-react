export default function InputTask({ onAdd }) {
  return (
    <div className="flex items-center gap-4">
      <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={() => onAdd()}
      >
        Add Task
      </button>
    </div>
  );
}
