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
}

const Fruits: React.FC<FruitsProps> = ({ fruits }) => (
  <ol
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 16,
    }}>
    {fruits.map((fruit, idx) => (
      <li key={idx}>
        {fruit.name}
        <button onClick={() => console.log(fruit)}>
          show fruit {fruit.icon}
        </button>
      </li>
    ))}
  </ol>
);

export default Fruits;
