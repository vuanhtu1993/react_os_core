import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import TodoComponent from "./components/Todo";
import {WithStyleButton, StyledButton} from './components/Common/Button'
import Layout from "./components/Common/Layout";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <Provider store={reduxStore}>
      <Layout>
        <TodoComponent/>
      </Layout>
    </Provider>
  );
}

export default App;
