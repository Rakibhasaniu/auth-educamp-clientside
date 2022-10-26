import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
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
          <Link to="/home" className="text-decoration-none">
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
            <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Courses</li>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">FAQ</li>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Login</li>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Register</li>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Blog</li>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">About</li>
          </Link>
          <Link to="/about" className="text-decoration-none">
            <li className="nav-link items  ms-3 text-info fw-bolder">Dark</li>
          </Link>
          <li className="nav-link items  ms-3 text-info fw-bolder">
            {/* {user?.displayName} */}
          </li>
        </div>
      </nav>
    </div>
    );
};


export default Header;