import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";

class Dashboard extends Component {
  render() {
    return (
    <div >
      Dashboard
    </div>
    );
  }
}

Dashboard.displayName = 'Dashboard';

export default connect(null, actions)(Dashboard);
