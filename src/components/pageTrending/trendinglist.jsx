import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './trendinglist.scss';

const TrendingList = ({ trending }) => {
  return (
    <section className="trending-section">
      <ul className="trending-section__list">
        <h2>Trending movies today:</h2>
        {trending.map(result => (
          <li
            className="trending-section__list-item"
            id={result.id}
            key={nanoid(7)}
          >
            <Link
              className="trending-section__list-item__link"
              to={{
                pathname: `/movies/${result.id}`,
              }}
            >
              {result.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingList;
