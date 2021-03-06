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
import Header from './Header';
import * as actions from "../actions";

class App extends Component {
  componentDidMount() {
    console.log('111')
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
            <Route path="http://localhost:5000/AdminDashboard">
              <AdminDashboard />
            </Route>
            <Route path="http://localhost:5000/UserDashboard">
              <CustomerDashboard />
            </Route>
            <Route path="/AdminLogin">
              <AdminLogin />
            </Route>
            <Route path="/CustomerLogin">
              <CustomerLogin />
            </Route>

          </div>
        </BrowserRouter>
        {/* navigation the server */}
        
      </div>
    );
  }
}

export default connect(null, actions)(App);
