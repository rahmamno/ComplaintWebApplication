import React, { Component } from 'react';
import '../App.css';

class CustomerLogin extends Component {
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

        var bodyReq = 
            {
                name: this.refs.name.value,
                email: this.refs.email.value,
                password: this.refs.password.value
            }
        this.props.loginCustomer(bodyReq);
    }

    renderChild() {
        return (
            <form ref="form" key="not-sent" className={"login-form"} autoComplete="off">
                <div className="middle-title">Customer Login Portal</div>
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
                        <input ref="email" required autoComplete="new-password" type="password"/>
                    </div>
                    <button className="button-send" onClick={this.send}>Login</button>
                    <a className="check-location" href="/CustomerReqistration">Not Registerd?</a>
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

CustomerLogin.displayName = 'CustomerLogin';

export default CustomerLogin;
