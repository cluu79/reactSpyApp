import React from 'react';
import './Logo.css';
import semiD from './images/red.png'

const Logo = () => {
  return (
    <div className="logo">
      <img src={semiD} alt="logo"/>
    </div>
  )
}

export default Logo;