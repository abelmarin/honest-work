import React, { useState, useContext } from 'react';

import './homeStyle.css';

import { Link } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState.js';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { users, isLoggedIn, negateLoggedIn } = useContext(GlobalContext);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const checkUser = e => {
        e.preventDefault();

        const potentialUser = {

        }

        const loggedInOrNot = users.includes();
        return email.length > 0 && password.length > 0 && isLoggedIn;
    }

    

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={checkUser}>
                <label>Email:</label>
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="login-btn" disabled={!validateForm()}>Login</button>
            </form>
            <h3>Not a user? Register here:</h3>
            <Link to="register">Sign up!</Link>
        </div>
    );
};