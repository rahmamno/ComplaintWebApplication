import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'; //"fix" correct component with redux to pass the props
import * as actions from "../actions"; //"fix" get access to the actions 

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.send = this.send.bind(this);
        this.renderChild = this.renderChild.bind(this);
    }

    send(event) {
        event.preventDefault();

        // Use HTML form validation to validate inputs
        const form = this.refs.form;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // "fix" the request to json object instead of array
        var bodyReq =   
        {
            name: this.refs.name.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        const respone = this.props.loginAdmin({
            name: this.refs.name.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        });
        console.log('respone',respone)
    }

    renderChild() {
        return (
            <form ref="form" key="not-sent" className={"login-form"} autoComplete="off">
                <div className="middle-title">Admin Login Portal</div>
                <hr />
                <div className="content">
                    <div className="section">
                        <label className="label">{"Name"}</label>
                        <input ref="name" required maxLength="255" autoComplete="new-password" />
                    </div>
                    <div className="section">
                        <label className="label">{"Email"}</label>
                        <input ref="email" required title="Hint: lower case only" autoComplete="new-password" />
                    </div>
                    <div className="section">
                        <label className="label">{"Password"}</label>
                        <input ref="password" required autoComplete="new-password" type="password" />
                    </div>
                    <button className="button-send" onClick={this.send}>Login</button>
                    <a className="check-location" href="/AdminRegistration">Not Registerd?</a>
                </div>
            </form>
        );
    }

    render() {
        return (
            <div class="App">
                {this.renderChild()}
            </div>
        );
    }
}

AdminLogin.displayName = 'AdminLogin';

export default connect(null, actions)(AdminLogin); //connect to redux
