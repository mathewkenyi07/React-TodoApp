
export default function Ui() {
  return (
    <>
      <div className="flex items-center justify-center text-6xl mb-[100px] text-neutral-200 font-bold text-[150px]">
        todos
      </div>

      <div className="flex flex-col items-center mb-10">
        <div className="flex bg-white rounded-full shadow-md border border-neutral-100 p-4 w-[600px] justify-between">
          <input
  
            type="text"
            placeholder="Add todo..."
            className="outline-none"
            value= {input}
            onChange={(event)=>setResult(event.target.value)}
            />

          <button
            type="button"
            className="flex justify-center rounded-full bg-green-500 h-7 w-7 items-center" onClick={()=>{addItem}} >+</button>
        </div>
      </div>
    </>
  );
}
