import React, { Component } from 'react';
import { ProjectsList } from './ProjectsList';

import './homeStyle.css';

export default class Home extends Component {


    render() {
        return (
            
            <div>
                <h1 className="header-style">List of Projects</h1>
                <ProjectsList />
            </div>
        )
    }
}
