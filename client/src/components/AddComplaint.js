import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from "../actions";

class AddComplaint extends Component {
    constructor(props) {
        super(props);
        this.addComplaint = this.addComplaint.bind(this);
    }  
    addComplaint(event) {
        event.preventDefault();

        // Use HTML form validation to validate inputs
        const form = this.refs.form;
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        var bodyReq = 
            {
                complaint: this.refs.complaint.value,
                email: this.refs.email.value,
            }
        
        
        const respone = this.props.addComplaint(bodyReq)
        console.log('respone',respone)
    } 

    render() {
        return (
            <div class="App">
                <form ref="form" key="not-sent" className={"login-form"} autoComplete="off">
                <div className="middle-title">Add your Complaint</div>
                <hr />
                <div className="content">
                    <div className="section">
                        <label className="label">{"Email"}</label>
                        <input ref="email" required title="Hint: lower case only" autoComplete="new-password" />
                    </div>
                    <div className="section">
                        <label className="label">{"Complaint"}</label>
                        <textarea ref="complaint" required />
                    </div>
                    <button className="button-send" onClick={this.addComplaint}>Submit</button>
                </div>
            </form>
            </div>
        );
    }
}

AddComplaint.displayName = 'AddComplaint';

export default connect(null, actions)(AddComplaint);
