import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import Layout from "./components/Common/Layout";

// React router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Retry component
const retry = (fn, retriesLeft = 1, interval = 1000) => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft < 1) {
            reject("Loading chuck failure!")
          }
          retry(fn, retriesLeft - 1, interval)
        }, interval)
      })
  })
};
// Lazy load component
const UserInformation = lazy(() => import('./routes/user_management/user_information'));
const CreateAccount = lazy(() => import('./routes/user_management/create_account'));

// Store
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <Provider store={reduxStore}>
      <Switch>
        <Route path='/login' component={() => <h1>Login</h1>}/>
        <Layout>
          <Suspense fallback={<h4>...Loading</h4>}>
            <Switch>
              <Route exact path="/" component={() => <h1>Dashboard</h1>} />
              <Route exact path="/user" component={UserInformation} />
              <Route path="/user/account" component={CreateAccount} />
            </Switch>
          </Suspense>
        </Layout>
      </Switch>
    </Provider>
  );
}

// Global router
window.globalRouter = null;
export default () => (
  <Router ref={(node) => window.globalRouter = node}>
    <App />
  </Router>
);
