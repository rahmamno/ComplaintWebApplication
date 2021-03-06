import React, { Component } from 'react';
import '../App.css';

class RedisterForm extends Component {
    constructor(props) {
        super(props);
        this.renderChild = this.renderChild.bind(this);
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

RedisterForm.displayName = 'RedisterForm';

export default RedisterForm;
