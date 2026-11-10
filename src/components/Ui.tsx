
// import plus from "../assets/plus.svg";
import type { RefObject } from "react";

type UiProps = {
  inputRef: RefObject<HTMLInputElement | null>;
  onAdd: () => void;
};

export default function Ui({ inputRef, onAdd }: UiProps) {
  return (
    <>
      <div className="flex items-center justify-center text-6xl mb-[100px]">
        todos
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="flex bg-white rounded-full shadow-md border border-neutral-100 p-4 w-[600px] justify-between">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add todo.."
            className="outline-none"/>

          <button
            type="button"
            onClick={onAdd}
            className="flex justify-center rounded-full bg-green-500 h-7 w-7 items-center">+</button>
        </div>
      </div>
    </>
  );
}
