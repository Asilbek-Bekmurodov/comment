import React, { useEffect, useState, useRef } from "react";
import Counter from "components/mem-callback/counter";
import Fruits, { Fruit, FruitsProps } from "components/mem-callback/fruits";

interface MemoCallbackProps {}

// const fruits: Fruit[] = [
//   {
//     name: "apple",
//     color: "red",
//     icon: "🍎",
//   },
//   {
//     name: "grape",
//     color: "black",
//     icon: "🍇",
//   },
//   {
//     name: "strawberry",
//     color: "red",
//     icon: "🍓",
//   },
// ];
const MemoCallback: React.FC<MemoCallbackProps> = () => {
  const [count, setCount] = useState(0);
  const fruits = useRef<Fruit[]>([
    {
      name: "apple",
      color: "red",
      icon: "🍎",
    },
    {
      name: "grape",
      color: "black",
      icon: "🍇",
    },
    {
      name: "strawberry",
      color: "red",
      icon: "🍓",
    },
  ]).current;

  useEffect(() => {
    console.log(`use Effect`);
  }, [fruits]);

  const onDelete: FruitsProps["onDelete"] = (idx, nextWord) => {
    console.log("delete fruit idx: " + idx);
  };

  return (
    <div>
      <h1>Fruits</h1>
      <Fruits onDelete={onDelete} fruits={fruits} />
      <Counter count={count} onIncrement={() => setCount((c) => c + 1)} />
    </div>
  );
};

export default MemoCallback;
