export default function TaskItem({ task, id, onDelete }) {
  return (
    <li className="flex justify-between my-3">
      <p className="text-stone-900 my-2">{task}</p>
      <button
        onClick={() => onDelete(id)}
        className="text-stone-700 hover:text-red-500"
      >
        Clear
      </button>
    </li>
  );
}
