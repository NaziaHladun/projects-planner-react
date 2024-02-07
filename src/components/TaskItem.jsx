export default function TaskItem({ task, id, onDelete }) {
  return (
    <li className="flex justify-between my-4">
      <p className="text-stone-900 my-4">{task}</p>
      <button
        onClick={() => onDelete(id)}
        className="text-stone-700 hover:text-red-500"
      >
        Clear
      </button>
    </li>
  );
}
