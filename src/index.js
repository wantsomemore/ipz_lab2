import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import App from "./App";
/* import { HashRouter as Router, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Login } from "./components/Auth/Login"; */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/* <Router>
    <div>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
      </main>
    </div>
  </Router> */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
