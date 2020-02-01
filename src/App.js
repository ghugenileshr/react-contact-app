import React, { Component, Fragment } from 'react'
// import { browserHistory } from "react-router";
import ContactList from "./components/contactList";
import AddContact from "./components/addContact";
import Navbar from "./components/navbar";
// import history from "./history";
// import {  } from 'react-router-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />
          <div className="container-fluid">
            <Switch>
              <Route  path="/" exact={true}>
                <ContactList />
              </Route>
              <Route path="/editContact/:id" exact={true}>
                <AddContact />
              </Route>
              <Route path="/addContact" exact={true}>
                <AddContact />
              </Route>
            </Switch>
          </div>
        </Router>
      </Fragment>
    )
  }
}
