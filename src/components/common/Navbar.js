import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Navbar.css';
import logo from '../Assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/dashboard">
          <img src={logo} alt="SkillSec Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/online-tools">Online Tools</Link></li>
        <li><Link to="/cyber-tools">Other Tools</Link></li>
        <li><Link to="/bloglan">Blog</Link></li>
        <li><Link to="/messages">Messages</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;