import React, { useState, useContext } from 'react';

import './homeStyle.css';

import { GlobalContext } from '../../context/GlobalState.js';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { users, addUser, isLoggedIn, negateLoggedIn } = useContext(GlobalContext);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const onSubmit = e => {
        e.preventDefault();

        const newUser = {
            id: Math.floor(Math.random() * 100000000),
            email,
            password
        }

        addUser(newUser);
        negateLoggedIn();
    }

    return (
        <div className="login">
            <h1>Create Your account!</h1>
            <form onSubmit={onSubmit}>
                <label>Email:</label>
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="login-btn" disabled={validateForm()}>Login</button>
            </form>
            
        </div>
    );
};

export default Register;