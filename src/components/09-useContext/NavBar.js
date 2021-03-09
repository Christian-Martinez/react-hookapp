import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'>
        useContext
      </Link>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          {/* activeClassName activa la casilla es parte de boostrap
					el NavLink puede establecer una clase si el url coincide con el path*/}
          <NavLink exact activeClassName='active' to='/' className='nav-item nav-link'>
            Home
          </NavLink>
          <NavLink exact activeClassName='active' to='/about' className='nav-item nav-link'>
            About
          </NavLink>
          <NavLink exact activeClassName='active' to='/login' className='nav-item nav-link'>
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
