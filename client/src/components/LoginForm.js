import React, { Component } from 'react';
import '../App.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
            { name: this.refs.name.value }, { email: this.refs.email.value }, { password: this.state.phone }
        ]
        this.props.loginAdmin(bodyReq); 
    }

    renderChild() {
        return (
            <form ref="form" key="not-sent" className={"login-form"} autoComplete="off">
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
                        <input ref="email" required autoComplete="new-password" />
                    </div>
                    <div className="section">
                        <label className="label">{"Confirm Password"}</label>
                        <input ref="email" required autoComplete="new-password" />
                    </div>
                </div>
                <button onClick={this.send}></button>
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

LoginForm.displayName = 'LoginForm';

export default LoginForm;
