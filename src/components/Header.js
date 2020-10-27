import React from 'react';

import settingsGear from '../assets/settings.png';

function Header() {
    return (
        <div style={headerStyle}>
            <h1 style={logoStyle}>HonestWork</h1>
            <img src={settingsGear} alt="Settings Gear" style={settingsStyle} />
        </div>
    )
}

const headerStyle = {
    background: '#ECECEC',    
    height: '100px'
}

const logoStyle = {
    color: '#000000',
    padding: '0px 30px',
    float: 'left'
}

const settingsStyle = {
    height: '50px',
    width: '50px',
    float: 'right',
    padding: '24px 30px',
    margin: 'auto'
}

export default Header;