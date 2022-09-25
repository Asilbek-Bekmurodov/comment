import React, { CSSProperties, memo } from "react";

interface FruitsProps {
  fruits: string[];
  onDelete: (fruit: string) => void;
}

const style: CSSProperties = {
  cursor: "pointer",
  backgroundColor: "#efed40",
  padding: 8,
  margin: 10,
  listStyleType: "none",
};

const Fruits: React.FC<FruitsProps> = ({ fruits, onDelete }) => {
  console.log("fruits calling...");
  return (
    <ul>
      {fruits.map((fruit) => (
        <li style={style} key={fruit} onClick={() => onDelete(fruit)}>
          {fruit}
        </li>
      ))}
    </ul>
  );
};

// export default Fruits; // simple component
export default memo(Fruits); // pure component

/**
 *
 * prevProps = {
 *  fruits: adds(001),
 *  onDelete: adds(002),
 * }
 *
 * newProps = {
 *  fruits: adds(001),
 *  onDelete: adds(003),
 * }
 *
 * propsCheck(Fruits) -> true
 *
 *
 *
 */
