import React from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './trendinglist.scss';

const TrendingList = ({ trending }) => {
  return (
    <ul className="trending-list">
      <h2>Trending movies today:</h2>
      {trending.map(result => (
        <li className="trending-list__item" id={result.id} key={nanoid(7)}>
          <Link
            to={{
              pathname: `/movie/${result.id}`,
            }}
          >
            {result.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
