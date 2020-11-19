import React, { useState, useContext } from 'react';

import './homeStyle.css';

import stringsToHash from '../../scripts/hash';

import { GlobalContext } from '../../context/GlobalState.js';

export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { users, addUser, isLoggedIn, negateLoggedIn } = useContext(GlobalContext);

    function validateForm() {
        return !(username.length > 0 && password.length > 0);
    }

    const checkUserExists = function(hash) {
        for(var i =0; i < users.length; i++) {
            if (users[i].id === hash) {
                return true;
            }
        }
        return false;
    }

    const onSubmit = e => {
        e.preventDefault();

        var hash = stringsToHash(username,password);

        if (checkUserExists(hash)) {

        }

        const newUser = {
            id: hash,
            username,
            password
        }

        console.log(hash);
        console.log(users)

        addUser(newUser);
        negateLoggedIn();
    }

    return (
        <div className="register">
            <h1>Create Your account!</h1>
            <form onSubmit={onSubmit}>
                <label>Username:</label>
                <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <label>Password:</label>
                <input type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="register-btn" disabled={validateForm()}>Sign up!</button>
            </form>
            
        </div>
    );
};

export default Register;