import React from "react";
import App from "./app";

interface ModeProps {}
export type IMode = "light" | "dark";
interface ModeState {
  mode: IMode;
}

class Mode extends React.Component<ModeProps, ModeState> {
  state = { mode: "dark" } as ModeState;

  handleChangeMode = (mode: IMode) => {
    this.setState({ mode });
  };

  render() {
    return <App mode={this.state.mode} onChangeMode={this.handleChangeMode} />;
  }
}

export default Mode;
