import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!user && <li><Link to="/login">Login</Link></li>}
        {user && <li><Link to="/orders">My Orders</Link></li>}
        <li><Link to="/contact">Contact Us</Link></li>
        {user && user.role === 'admin' && <li><Link to="/admin">Admin Dashboard</Link></li>}
        {user && user.role === 'vendor' && <li><Link to="/newevent">Sell Tickets</Link></li>}
        {user && <li><button id='abc' onClick={onLogout}>Logout</button></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
