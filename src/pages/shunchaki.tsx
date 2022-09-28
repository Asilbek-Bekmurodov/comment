import Fruits from "components/shunchaki/fruits";
import Tubs from "components/shunchaki/tub-class";
import { useEffect, useCallback, useState, useRef } from "react";

interface ShunchakiProps {}

const Shunchaki: React.FC<ShunchakiProps> = () => {
  const [count, setCount] = useState(0);
  const initFruits = useRef(["🍎-apple", "🍇-grape", "🍓-strawberry"]).current;

  const [fruits, setFruits] = useState(initFruits); // 001

  useEffect(() => {
    console.log("use effect calling...");
  }, [initFruits]);

  const render = (tub: number) => <li key={tub}>{tub}</li>;
  const onDelete = useCallback(
    (fruitName: string) => {
      const newFruits = fruits.filter((fruit) => fruit !== fruitName);
      setFruits(newFruits);
    },
    [fruits]
  );

  return (
    <div>
      <Fruits fruits={fruits} onDelete={onDelete} />
      <Tubs render={render} start={20} count={1000} />
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
    </div>
  );
};

export default Shunchaki;
