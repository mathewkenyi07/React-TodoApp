
import trash from "../assets/trash.svg";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type ItemsProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export default function Items({
  todo,
  onToggle,
  onRemove,
}: ItemsProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between w-[600px] border-b border-gray-200 py-3">
        <div className="flex items-center gap-3 pl-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="h-4 w-4 cursor-pointer"
          />

          <span
            className={
              todo.completed
                ? "text-lg text-gray-400 line-through"
                : "text-lg text-gray-600"
            }
          >
            {todo.title}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onRemove(todo.id)}
          className="flex h-6 w-6 items-center justify-center rounded-full"
        >
          <img src={trash} alt="Delete todo" />
        </button>
      </div>
    </div>
  );
}
