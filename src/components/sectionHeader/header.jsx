import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <section className="header-section">
      <NavLink to="/" className="header-section__button">
        HOME
      </NavLink>
      <NavLink to="/movies" className="header-section__button">
        FIND A MOVIE
      </NavLink>
    </section>
  );
};

export default Header;
