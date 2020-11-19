import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';

export const AddProject = () => {
    const [text, setText] = useState('');

    const { addProject, negateSeenHome } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newProject = {
            id: Math.floor(Math.random() * 100000000),
            text
        }

        addProject(newProject);
        negateSeenHome();
    }


    return (
        <div>
            <span className="close" onClick={negateSeenHome}>&times;</span>
            <form onSubmit={onSubmit}>
                <h3>Add new Project</h3>
                <div className="form-control">
                    <label htmlFor="text">Project Name: </label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <button className="create-project-btn">Add Project</button>
            </form>
        </div>
    )
}
