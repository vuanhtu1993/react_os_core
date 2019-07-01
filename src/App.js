import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComponent from "./components/Todo";
import { Provider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TodoComponent/>
      </div>
    </Provider>
  );
}

export default App;
