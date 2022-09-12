import { Component } from "react";
import NavBar from "./components/navbar";
import Content from "./components/content";
import { IContextValue, SuperContext } from "./context/context";

export type Mode = "dark" | "light";
export interface Profile {
  username: string;
  email: string;
}

interface AppState {
  profile: Profile;
}

interface AppProps {
  mode: Mode;
  onChangeMode: (mode: Mode) => void;
}

class App extends Component<AppProps, AppState> {
  state: AppState = {
    profile: {
      username: "arslonbekXX",
      email: "ars@domain.com",
    },
  };

  componentDidUpdate(prevProps: AppProps, prevState: AppState) {
    if (prevProps.mode !== this.props.mode) {
      console.log(`change mode for ${this.props.mode}`);
    }
  }

  render() {
    const value: IContextValue = {
      ...this.state,
      ...this.props,
    };

    return (
      <SuperContext.Provider value={value}>
        <NavBar />
        <Content onChangeMode={this.props.onChangeMode} />
      </SuperContext.Provider>
    );
  }
}

export default App;
