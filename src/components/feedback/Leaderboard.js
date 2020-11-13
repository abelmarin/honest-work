import React, { Component } from 'react';


export default class Leaderboard extends Component {

    render() {
        return (
            <div>
                <h1 style={headerStyle}>HonestPoint Leaderboard</h1>
                <div className="topThreeCards"></div>
                <div className="otherCards"></div>

            </div>
        )
    }
}


var exampleTeamMembers = ["Steve Bell", "Michael Phonix", "Abel Marin", "Donald Trump", "Joe Biden", "Andrew Yang"];

const headerStyle = {
    textAlign: 'center',
    fontSize: '2.5rem'
}