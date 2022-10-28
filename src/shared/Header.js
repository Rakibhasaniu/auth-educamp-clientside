import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvide';
import './Header.css'




const Header = () => {

 const {user, logout} = useContext(AuthContext);
 const handleLogout = ()  => {
  logout()
  .then( () => {})
  .catch(error => console.error(error))
 }
    return (
       
      <div>
      <nav className="d-flex justify-content-around align-items-center bg-secondary p-3 flex-wrap">
        <div className="logo ">
          <img
            className="logo-img"
            src="https://i.ibb.co/TtRpKPP/doctor.png"
            alt=""
          />
        </div>
        <div className="menu-container d-flex flex-wrap ">
          <Link  className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">EduCamp</li>
          </Link>
          {/* <Link to="/login" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Login</li>
          </Link> */}

          {/* {user ? (
            <li
              role="button"
              className="nav-link items  ms-3 text-info fw-bolder"
            >
              Logout
            </li>
          ) : (
            <Link to="/registration" className="text-decoration-none">
              <li className="nav-link items  ms-3 text-info fw-bolder">
                Registration
              </li>
            </Link>
          )} */}
          <Link to="/home" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Home</li>
          </Link>
            <Link to="/courses" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Courses</li>
          </Link>
          <Link to="/faq" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">FAQ</li>
          </Link>
          <Link to="/login" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Login</li>
          </Link>
          <Link to="/register" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Register</li>
          </Link>
          <Link to="/blog" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Blog</li>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">About</li>
          </Link>
          <Link to="/dark" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Dark</li>
          </Link>
          <li className="nav-link items  ms-3 text-info fw-bolder">
            {
              user?.uid ? 
              <>
                <span>{user?.displayName}</span>
                <Button onClick={handleLogout} >Log Out</Button>
              </>
              :
              <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </>
            }
            
          </li>
          <li className="nav-link items  ms-3 text-info fw-bolder">
            {user?.photoURL ?
            <Image style={{height: '40px'}} roundedCircle src={user.photoURl}></Image>  
            : <p>No Photo</p>
          }
          </li>
        </div>
      </nav>
    </div>
    );
};


export default Header;