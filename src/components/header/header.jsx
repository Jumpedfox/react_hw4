import React from 'react';
import { NavLink } from 'react-router-dom';
import "./heades.scss"

const TrendingButton = () => {
  return (
    <div className='header'>
      <NavLink to="/" className='header__button-home'>HOME</NavLink>
    </div>
  );
};

export default TrendingButton;
