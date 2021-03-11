//require('styles/Styles.scss');

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';
import HomePage from './HomePage';
import AdminDashboard from './AdminDashboard';
import CustomerDashboard from './CustomerDashboard';
import AdminLogin from './AdminLogin';
import CustomerLogin from './CustomerLogin';
import AddComplaint from './AddComplaint';
import UpdateComplaint from './UpdateComplaint';
import AdminRegistration from './AdminRegistration';
import CustomerReqistration from './CustomerReqistration';
import Header from './Header';
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser(); //to verify the user loged in to reducers
  }

  render() {
    return (
      <div class="App">
        <BrowserRouter>
          <div>
            {/* adding users routes */}
            {/* <Header /> */}
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/AdminDashboard"> {/* "fix" route should be localhost:3000 */}
              <AdminDashboard />
            </Route>
            <Route path="/UserDashboard">
              <CustomerDashboard />
            </Route>
            <Route path="/AdminLogin">
              <AdminLogin />
            </Route>
            <Route path="/CustomerLogin">
              <CustomerLogin />
            </Route>
            <Route path="/AddComplaint">
              <AddComplaint />
            </Route>
            <Route path="/updateComplaint">
              <UpdateComplaint />
            </Route>
            <Route path="/AdminRegistration">
              <AdminRegistration />
            </Route>
            <Route path="/CustomerReqistration">
              <CustomerReqistration />
            </Route>
          </div>
        </BrowserRouter>
        {/* navigation the server */}
        
      </div>
    );
  }
}

export default connect(null, actions)(App);
