import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { BiLogInCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvide';
import './Login.css';




const Login = () => {
  const [error, setError] = useState('')

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'

const {signIn} = useContext(AuthContext);
  const {providerLogin}  = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();


  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
      navigate(from, {replace: true})
    })
    .catch(error => {
      console.error(error)
      setError(error.message);
    })
  }

   

 
 

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
      const user = result.user;
      setError('');
      form.reset();
    })
    .catch(error => {
      setError(error.message);
      console.error(error)
    })
   
  
  }
    return (
        <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form" onSubmit={handleSubmit} >
        <input type="text" placeholder="Your Email"  name='email' required />
        
        <input type="password" placeholder="password" name='password'  required />
        
        <button>Login</button>
        

        <p>
          Don't have an account? <Link to="/register">Register first</Link>
        </p>
      </form>

      <button onClick={handleGoogleLogin}>Google</button>
      <p className='error-message text-danger'>{error}</p>
      <button>Github</button>
      
    </div>
    );
};

export default Login;

