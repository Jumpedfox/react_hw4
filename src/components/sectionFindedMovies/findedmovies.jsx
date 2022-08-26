import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './findedmovies.scss';

const FindedMovies = ({ movies }) => {
  return (
    <section className="finded-movies-section">
      <ul className="finded-movies-section__list">
        <h2>Finded movies:</h2>
        {movies.map(result => (
          <li
            className="finded-movies-section__list-item"
            id={result.id}
            key={nanoid(7)}
          >
            <Link
              className="finded-movies-section__list-item_link"
              to={{
                pathname: `/movies/${result.id}`,
              }}
            >
              {result.title.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FindedMovies;
