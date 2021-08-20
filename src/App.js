import React, { useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import About from "./Components/Home/About/About";
import AddServices from "./Components/Admin/AddServices/AddServices";
import ManageOrders from "./Components/Admin/ManageOrders/ManageOrders";
import { createContext } from 'react';
import SignIn from "./Components/SignIn/SignIn";
import NoMatch from "./Components/NoMatch/NoMatch";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/addService">
            <AddServices />
          </Route>
          <Route path="/manageOrders">
            <ManageOrders />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
