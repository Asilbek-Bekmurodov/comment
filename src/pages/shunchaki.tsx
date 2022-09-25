import Fruits from "components/shunchaki/fruits";
import Tub from "components/shunchaki/tub";
import { useEffect, useCallback, useState, useRef, FC } from "react";

interface ShunchakiProps {}

const render = (tub: number) => <li key={tub}>{tub}</li>;

const Shunchaki: React.FC<ShunchakiProps> = () => {
  const [count, setCount] = useState(0);
  const initFruits = useRef(["🍎-apple", "🍇-grape", "🍓-strawberry"]).current;

  const [fruits, setFruits] = useState(initFruits); // 001

  useEffect(() => {
    console.log("use effect calling...");
  }, [initFruits]);

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
      <Tub render={render} start={20} count={3000} />
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
    </div>
  );
};

export default Shunchaki;
