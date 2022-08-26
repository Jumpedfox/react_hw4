import React from 'react';
import { nanoid } from 'nanoid';
import './castpage.scss';

const CastPage = ({ cast }) => {
  return (
    <section className="cast-page-section">
      <ul className="cast-page-section__list">
        {cast.map(result => (
          <li className="cast-page-section__list-item" key={nanoid(7)}>
            {result.profile_path !== null ? (
              <img
                className="cast-page-section__list-item_pic"
                src={`https://image.tmdb.org/t/p/w200/${result.profile_path}`}
                alt="img"
              ></img>
            ) : (
              <img
                className="cast-page-section__list-item_pic"
                src={`https://nelc-cert.s3.us-east-2.amazonaws.com/wp-content/uploads/2016/11/02104338/Portrait-Placeholder.jpg`}
                alt="img"
              ></img>
            )}
            <span className="cast-page-section__listitem__name">
              {result.name.toUpperCase()}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CastPage;
