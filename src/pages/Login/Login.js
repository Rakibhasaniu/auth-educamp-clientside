import React, { useState } from 'react';
import { BiLogInCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './Login.css';







const Login = () => {

  const[error, setError] = useState({
    email: "",
    password: "",
  
});
  const [info, setInfo] = useState({
    email: "",
    password: ""
  })
  const handleEmail = (e) => {
    const email = e.target.value;
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setError({ ...error, email: "Please Provide A Valid Email"})
      setInfo({ ...info, email: e.target.value})

    }else{
      setError({ ...error, email: ""})
      setInfo({ ...info, email: e.target.value})
    }
  }
  const handlePassword = (e) => {
    const password = e.target.value;
    if(password.length < 6){
      setInfo({ ...info, password: e.target.value})
      setError({...error, password: "Must Be At Least 6 Character"})
    }else{
      setError({ ...error, password: ""})
      setInfo({ ...info, password: e.target.value})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info)
  
  }
    return (
        <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form" onSubmit={handleSubmit} >
        <input type="text" placeholder="Your Email"  onChange={handleEmail} />
        {error.email && <p className='error-message'>{error.email}</p>}
        <input type="password" placeholder="password"  onChange={handlePassword} />
        {error.password && <p className='error-message'>{error.password}</p>}
        <button>Login</button>

        <p>
          Don't have an account? <Link to="/register">Register first</Link>
        </p>
      </form>

      <button>Google</button>
      <button>Github</button>
      
    </div>
    );
};

export default Login;