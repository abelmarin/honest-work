import React, { Component } from 'react';
import './styles/feedbackStyle.css';

export default class Home extends Component {
    render() {
        return (
            <div className="formStyle">
                <h1>Honest Feedback</h1>
                <form>
                    {/* Subject line */}
                    <label className="labelStyle">Subject</label> <br/><br/>
                    <input 
                        type="text" 
                        id="submitForm"
                        className="subjectStyle" /> <br/><br/>
                    
                    {/* Feedback section */}
                    <label className="labelStyle">Feedback</label><br/><br/>
                    <textarea 
                        id="feedbackForm"
                        className="feedbackStyle" /> <br/><br/><br/>

                    {/* Submit Button */}
                    <button className="submitStyle">Submit</button>
                </form>
            </div>
        )
    }
}
