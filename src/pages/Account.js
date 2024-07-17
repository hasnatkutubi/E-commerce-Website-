// src/pages/Account.js
import React, { useState } from 'react';
import './Account.css';
// import './server';
const Account = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className="account">
            {isLogin ? (
                <div className="login-form">
                    <h2>Login</h2>
                    <form>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                    </form>
                    <p>Don't have an account? <span onClick={toggleForm}>Sign up</span></p>
                </div>
            ) : (
                <div className="signup-form">
                    <h2>Sign Up</h2>
                    <form>
                        <input type="text" placeholder="Username" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>Already have an account? <span onClick={toggleForm}>Log in</span></p>
                </div>
            )}
        </div>
    );
}

export default Account;
