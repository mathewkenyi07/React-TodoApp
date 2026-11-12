import { useState } from "react";
import Ui from "./Ui";
import Items from "./Items";

export default function TodoLogic() {
  const [add, setAdd] = useState<string>("");
  const [results, setResult] = useState<string[]>([]);

  function addItem(value) {
    setResult([...add]);
    setAdd("");
  }

  return (
    <>
      <Ui />
      <Items placeholder="IAm Here" />
      <Items placeholder="reactjsexample.com" />
      <Items placeholder="A todo App developed with react" />
    </>
  );
}
