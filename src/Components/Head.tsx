import { useState } from 'react';
import '../CSS/Head.css';
import weatherLogo from '../assets/weather.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


type LocationState = {
  pathname : string
}


function Head() {
  const location = useLocation();
  console.log(location.pathname);
  const { pathname } = location as LocationState;
  return (
    <nav className='menu-container'>
      <div className='menu-logo'>
        <img className='logo' src={weatherLogo} alt='Weather Logo' />
        <span className='title'>Weather App</span>
      </div>

      <ul className='menu-links'>
        <li className='menu-links-list'>
          <Link to='/' 
          className={pathname === '/' ? 'menu-link active' : 'menu-link'}
          >Home</Link>
        </li>
        <li className='menu-links-list'>
          <Link to='/about' 
          className={pathname === '/about' ? 'menu-link active' : 'menu-link'}
          >About</Link>
        </li>
        <li className='menu-links-list'>
          <Link to='/contact' 
          className={pathname === '/contact' ? 'menu-link active' : 'menu-link'}
          >Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Head
