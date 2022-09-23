import React, { useEffect, useState, useRef } from "react";
import Counter from "components/mem-callback/counter";
import Fruits, { Fruit } from "components/mem-callback/fruits";

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

  return (
    <div>
      <h1>Fruits</h1>
      <Fruits fruits={fruits} />
      <Counter
        count={count}
        onIncrement={() => {
          fruits.pop();
          setCount((c) => c + 1);
        }}
      />
    </div>
  );
};

export default MemoCallback;
