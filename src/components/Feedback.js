import React, { Component } from 'react';


export default class Home extends Component {
    render() {
        return (
            <div style={formStyle}>
                <h1>Honest Feedback</h1>
                <form>
                    {/* This is the subject line */}
                    <label style={labelStyle}>Subject</label> <br />
                    <input type="text" id="submitForm" /> <br />
                    
                    {/* This is the feedback section */}
                    <label style={labelStyle}>Feedback</label><br />
                    <textarea   />
                </form>
            </div>
        )
    }
}

const formStyle = {
    margin: 'auto'
}

const labelStyle = {
    // textAlign: 'left'
}