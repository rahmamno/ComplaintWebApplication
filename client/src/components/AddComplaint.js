import React, { Component } from 'react';
import '../App.css';

class AddComplaint extends Component {
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
            { complaint: this.refs.complaint.value }
        ]
        this.props.AddComplaint(bodyReq);
    }

    renderChild() {
        return (
            <form ref="form" key="not-sent" className={"login-form"} autoComplete="off">
                <div className="middle-title">Add Complaint</div>
                <hr />
                <div className="content">
                    <div className="section">
                        <label className="label">{"Ender your Complaint"}</label>
                        <input ref="complaint"/>
                    </div>
                    <button className="button-send" onClick={this.send}>Submit</button>
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

AddComplaint.displayName = 'AddComplaint';

export default AddComplaint;
