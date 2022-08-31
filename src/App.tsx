import { Component } from "react";
import NavBar from "./components/navbar";
import Content from "./components/content";
import { SuperContext } from "./context/context";

export type Mode = "dark" | "light";
export interface Profile {
  username: string;
  email: string;
}

interface AppState {
  profile: Profile;
  mode: Mode;
}

class App extends Component<any, AppState> {
  state = {
    profile: {
      username: "arslonbekXX",
      email: "ars@domain.com",
    },
    mode: "dark",
  } as AppState;

  handleChangeMode = (mode: Mode) => {
    this.setState({ mode });
  };

  render() {
    return (
      <SuperContext.Provider
        value={{ ...this.state, onChangeMode: this.handleChangeMode }}>
        <NavBar />
        <Content onChangeMode={this.handleChangeMode} />
      </SuperContext.Provider>
    );
  }
}

export default App;
