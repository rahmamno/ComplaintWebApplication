import React, { Component } from 'react';
import '../App.css';

class RedisterForm extends Component {
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

        var bodyReq = [
            { name: this.refs.name.value }, 
            { email: this.refs.email.value }, 
            { password: this.refs.password.value}, 
            { confirmPassword : this.refs.confirmPassword.value}
        ]
        this.props.registerAdmin(bodyReq);

    }

    renderChild() {
        return (
            <form ref="form" key="not-sent" className={"login-form"} autoComplete="off">
                <div className="middle-title">Admin Registration Portal</div>
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
                        <input ref="password" required autoComplete="new-password" type="password"/>
                    </div>
                    <div className="section">
                        <label className="label">{"Confirm Password"}</label>
                        <input ref="confirmPassword" required autoComplete="new-password" type="password"/>
                    </div>
                    <button className="button-send" onClick={this.send}>Login</button>
                    <a className="check-location" href="/AdminLogin">Have an Account?</a>
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

RedisterForm.displayName = 'RedisterForm';

export default RedisterForm;
