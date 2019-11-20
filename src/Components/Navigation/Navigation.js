import React from 'react';
import './Navigation.css';
import semiD from './../Logo/images/red.png';

const Navigation = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={semiD} alt='logo' />
      </div>

      <a href='#' className='signOut'>
        Sign Out
      </a>
    </nav>
  );
}

export default Navigation;
