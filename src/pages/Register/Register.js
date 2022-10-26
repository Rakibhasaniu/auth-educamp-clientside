import React, { useState } from 'react';
import { SiGnuprivacyguard } from "react-icons/si";
const Register = () => {

  const [info, userInfo] = useState({
    email: "",
    password: ""
  })
  const handleEmail = (e) => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

    return (
        <div className="login-container">
      <div className="login-title">Sign up <SiGnuprivacyguard /></div>
      <form className="login-form" onSubmit={handleSubmit} >
        <input type="name" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" value={info.email} onChange={handleEmail} />
        <input type="text" placeholder="Image Url" />
        <input placeholder="password" />

        <input type="password" placeholder="confirm password" />

        <button>Sign up</button>

      </form>
    </div>
    );
};

export default Register;