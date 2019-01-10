import React from 'react';

import {  Link} from 'react-router-dom';

import  Logo from '../styles/assets/img/d4.png';
import  LogoLight  from '../styles/assets/img/d4.png';

const Navbar = ({ authUser }) => { 
   
    return(
        <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
        <div className="container">
          <div className="topbar-left">
            <button className="topbar-toggler">☰</button>
            <Link className="topbar-brand" to="/-/home">
              <img className="logo-default" src={Logo} alt="logo" />
              <img className="logo-inverse" src={LogoLight} alt="logo" />
            </Link>
          </div>
          <div className="topbar-right">
            <ul className="topbar-nav nav">
              <li className="nav-item">
                 
                <Link className="nav-link" to="/-/home">Home</Link>
              </li>
              <li className="nav-item">
               
                <Link className="nav-link" to="/-/articles/create" >Write new article </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hey { authUser && authUser.username}!
                  <i className="fa fa-caret-down" />
                </a>
                <div className="nav-submenu">
                  <a className="nav-link" href="page-login.html">My articles</a>
                  <a className="nav-link" href>Logout</a>
                </div>
              </li>



              {
                //if user is not auth show the list 
                !authUser &&
                <li className="nav-item">
                <Link className="nav-link" to="/-/login">Login</Link>
              </li>
              }


              {
                //if user is not auth show the list 
                !authUser &&
                <li className="nav-item">
                <Link className="nav-link" to="/-/signout">Signup</Link>
              </li>

              }

            </ul>
          </div>
        </div>
      </nav>
      
    );
};

export default Navbar;
