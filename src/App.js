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
import CheckOut from "./Components/ExtraPages/CheckOut/CheckOut";
import PrivateRoute from "./Components/SignIn/PrivateRoute";
import ServiceDetails from "./Components/ExtraPages/ServiceDetails/ServiceDetails";
import AboutPage from "./Components/AboutPage/AboutPage";



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
          <Route path="/about">
            <AboutPage />
          </Route>
          <PrivateRoute path="/checkOut">
            <CheckOut/>
          </PrivateRoute>
          <Route path="/details/:serviceId">
            <ServiceDetails/>
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
