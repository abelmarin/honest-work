import React, {useState, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState.js';

import './projectStyle.css';

export const AddTask = () => {
    const [text, setText] = useState('');

    const { addTask, negateSeenProject } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTask = {
            id: Math.floor(Math.random() * 100000000),
            text
        }

        addTask(newTask);
        negateSeenProject();
    }


    return (
        <div>
            <span className="close" onClick={negateSeenProject}>&times;</span>
            <form onSubmit={onSubmit}>
                <h3>Add new Task</h3>
                <div className="form-control">
                    <label htmlFor="text">Task Name: </label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <button className="btn">Add Task</button>
            </form>
        </div>
    )
}
