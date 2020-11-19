import React, {useState, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState.js';

import './feedbackStyle.css';

export const AddFeedback = () => {
    const [text, setText] = useState('');
    const [subject, setSubject] = useState('');

    const { addComment, negateSeenComment } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newComment = {
            id: Math.floor(Math.random() * 100000000),
            subject,
            text
        }

        addComment(newComment);
        negateSeenComment();
    }

    return (
        <form className="formStyle" onSubmit={onSubmit}>
            {/* Subject line */}
            <label className="labelStyle">Subject</label> <br/><br/>
            <input 
                className="subjectStyle"
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}  /> <br/><br/>
            
            {/* Feedback section */}
            <label className="labelStyle">Feedback</label><br/><br/>
            <textarea 
                className="feedbackStyle"
                value={text} 
                onChange={(e) => setText(e.target.value)}  /> <br/><br/><br/>

            {/* Submit Button */}
            <button className="submitStyle">Submit</button>
        </form>
    )
}
