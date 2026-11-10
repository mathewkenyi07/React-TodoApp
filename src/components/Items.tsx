
import trash from "../assets/trash.svg";

export default function Items(props) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between w-[600px] border-b border-gray-200 py-3">
        <div className="flex items-center gap-3 pl-1">
          <input
            type="checkbox"
            className="h-4 w-4 cursor-pointer"
          />

         <p>{props.placeholder}</p>


         
        </div>

        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-full">
          <img src={trash} alt="Delete todo" />
        </button>
      </div>
    </div>
  );
}
