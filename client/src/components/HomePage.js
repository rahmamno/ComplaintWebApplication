import React, { Component } from 'react';
import '../App.css';

class HomePage extends Component {
    render() {
        return (
            <div class="bgimg">
                <div class="topleft">
                    <p>ABC Complaints</p>
                </div>
                <div class="middle">
                    <h1 class="welcome">Welcome</h1>
                    <hr />
                    <a href="/AdminLogin">Admin Portal</a>
                    <div></div>
                    <a href="/CustomerLogin">Customer Portal</a>
                </div>
            </div>
        );
    }
}

HomePage.displayName = 'HomePage';

export default HomePage;
