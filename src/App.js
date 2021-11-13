import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import GeneralLayout from "./components/Common/GeneralLayout";

//import Home from "./components/Home/Home";
import Login from "./components/Common/Login/Login";
import Registration from "./components/Common/Registration/Registration";
import RoleSelector from "./components/RoleSelector";

import Doctor from "./components/Doctor/Doctor";
import Patient from "./components/Patient/Patient";

import ExaminationRequests from "./components/Doctor/Content/ExaminationRequests/ExaminationRequests";

import "./App.css";

import "fontsource-roboto";

const App = () => {
  return (
    <GeneralLayout>
      <Router>
        <div>
          <main>
            <Route exact path="/" component={RoleSelector} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Registration} />

            <Route path="/doctor" component={Doctor} />
            <Route path="/patient" component={Patient} />

            {/* {true && (
            <React.Fragment>
        <Route exact path="/examination-requests" component={ExaminationRequests} />
        </React.Fragment>)} */}
          </main>
        </div>
      </Router>
    </GeneralLayout>
  );
};

export default App;
