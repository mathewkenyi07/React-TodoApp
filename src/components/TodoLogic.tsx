import { useReducer, useRef } from "react";
import Ui from "./Ui";
import Items from "./Items";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Action =
  | { type: "add"; data: Todo }
  | { type: "linethrough"; data: number }
  | { type: "remove"; data: number };

function reducer(state: Todo[], action: Action): Todo[] {
  if (action.type === "add") {
    return [...state, action.data];
  }

  if (action.type === "linethrough") {
    return state.map((todo) =>
      todo.id === action.data ? { ...todo, completed: !todo.completed } : todo,
    );
  }

  if (action.type === "remove") {
    return state.filter((todo) => todo.id !== action.data);
  }
  return state;
}

export default function TodoLogic() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [current, dispatch] = useReducer(reducer, [] as Todo[]);

  function handleAdd() {
    const value = inputRef.current?.value.trim();
    if (!value) return;

    console.log("wat was added:", value);

    dispatch({
      type: "add",
      data: { id: Date.now(), title: value, completed: false },
    });

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function lineThrough(id: number) {
    dispatch({
      type: "linethrough",
      data: id,
    });
  }

  function removeTodo(id: number) {
    dispatch({
      type: "remove",
      data: id,
    });
  }

  return (
    <>
      <Ui inputRef={inputRef} onAdd={handleAdd} />

      <div className="flex flex-col items-center">
        {current.map((todo) => (
          <Items
            key={todo.id}
            todo={todo}
            onToggle={lineThrough}
            onRemove={removeTodo}
          />
        ))}
      </div>
    </>
  );
}
