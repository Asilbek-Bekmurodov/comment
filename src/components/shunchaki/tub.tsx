import React from "react";

interface TubProps {
  count: number;
  start: number;
  render: (tub: number) => JSX.Element;
}

function findTubs(start: number, count: number) {
  console.log("finTubs calling...");
  const tubs: number[] = [];

  for (let i = start; ; i++) {
    let isTub = true;
    for (let j = 2; j < i ** 0.5; j++) {
      if (i % j === 0) {
        isTub = false;
        break;
      }
    }

    if (isTub) {
      tubs.push(i);
      if (tubs.length === count) break;
    }
  }

  return tubs;
}

const Tub: React.FC<TubProps> = ({ start, count, render }) => {
  const tubs: number[] = findTubs(start, count);

  return (
    <div>
      <h1>
        Tub Sonlar {start} dan boshlab {count} ta
      </h1>
      <ul>{tubs.map(render)}</ul>
    </div>
  );
};

export default React.memo(Tub); // pure component
