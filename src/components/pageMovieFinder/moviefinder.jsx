import React from 'react';
import './moviefinder.scss';

const Moviefinder = ({ handleWord, findMovie }) => {
  return (
    <section className="searchbar-section">
      <form className="searchbar-section__form" onSubmit={findMovie}>
        <input
          className="searchbar-section__form__input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Movie..."
          onChange={handleWord}
        />
        <button type="submit" className="searchbar-section__form__button">
          <span className="searchbar-section__form__button-label">FIND</span>
        </button>
      </form>
    </section>
  );
};

export default Moviefinder;
