import React from 'react';
import { SiGnuprivacyguard } from "react-icons/si";
const Register = () => {
    return (
        <div className="login-container">
      <div className="login-title">Sign up <SiGnuprivacyguard /></div>
      <form className="login-form">
        <input type="name" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Image Url" />
        <input placeholder="password" />

        <input type="password" placeholder="confirm password" />

        <button>Sign up</button>

      </form>
    </div>
    );
};

export default Register;