import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from "./Blog";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../Redux/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


function App() {
  return (
      <ReduxProvider store={reduxStore}>
          <div className="App">
              {/*<header className="App-header">*/}
              {/*    <img src={logo} className="App-logo" alt="logo" />*/}
              {/*    <h1 className="App-title">Blog Redux app</h1>*/}
              {/*</header>*/}
              <Blog />
          </div>
      </ReduxProvider>
  );
}

export default App;
