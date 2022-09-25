import React from "react";

export type FruitColor =
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "white"
  | "black";

export interface Fruit {
  name: string;
  icon: string;
  color: FruitColor;
}
export interface FruitsProps {
  fruits: Fruit[];
  onDelete: (idx: number, nextWord?: string) => void;
}

const Fruits: React.FC<FruitsProps> = ({ fruits, onDelete }) => {
  console.log("fruits calling...");
  return (
    <ol
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 16,
      }}>
      {fruits.map((fruit, idx) => (
        <li key={idx}>
          {fruit.icon}-{fruit.name}
          <button
            onClick={() => {
              onDelete(idx);
            }}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};

export default Fruits;
