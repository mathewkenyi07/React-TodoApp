import { useState } from "react";
import Ui from "./Ui";
import Items from "./Items";


export default function TodoLogic() {

  //to store the input form the user
  const [add, setAdd] = useState<string>("");
  console.log("input: ",add);
  

  //to add the input from to the results array
  const [results, setResult] = useState<string[]>([]);
  console.log("results array: ",results);
  

  //to store the ids of the items added
  const [completed, setCompleted] = useState<number[]>([]);
  console.log("line-through: ",completed);
  


  //function that add the input
  function addItemFn() {
    if (add.trim() === "") return;
    setResult([...results, add]);
    setAdd("");
  }




  //function for line-through
  function lineThrough(index: number){
    if (completed.includes(index)){
      setCompleted(completed.filter((item)=>item!==index));
      //this checks if this particular item id is in the completed array then it removes it from the completed array
    }
    else{
      setCompleted([...completed,index]);
      //this is like toggle if it exists remove it else add it
    }

  }


  function deleteItem (index: number){
   
      setResult(results.splice(index,index+1));

  }


  return (
    <>
      <Ui input={add}
       setInput={setAdd} 
       addItem={addItemFn} 
       />

      {results.map((items, index) => 
         <Items 
        key={index} 
        placeholder={items}
        completed = {completed.includes(index)} 
        lineThrough = {()=>lineThrough(index)}
        deleteItem = {()=>deleteItem(index)}
        />
      )}
    </>
  );
}
