import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div >
                <div class="header">
                    <h1>Header</h1>
                    {/* <a>login</a> */}
                </div>
            </div>
        );
    }
}

Header.displayName = 'Header';

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}
export default connect(mapStateToProps)(Header);
