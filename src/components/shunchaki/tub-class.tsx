import React from "react";
import { findTubs } from "./tub";

interface TubsProps {
  count: number;
  start: number;
  render: (tub: number) => JSX.Element;
}

interface TubsState {}

class Tubs extends React.Component<TubsProps, TubsState> {
  render() {
    const { start, count, render } = this.props;
    const tubs: number[] = findTubs(start, count);

    return (
      <div>
        <h1>
          Tub Sonlar {start} dan boshlab {count} ta
        </h1>
        <ul>{tubs.map(render)}</ul>
      </div>
    );
  }
}

export default Tubs;
