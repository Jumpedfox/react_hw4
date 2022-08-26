import React from 'react';
import { nanoid } from 'nanoid';
import './reviewspage.scss';

const ReviewsPage = ({ reviews }) => {
  return (
    <section className="reviews-section">
      <ul className="reviews-section-list">
        {reviews.map(result => (
          <li className="reviews-section-list__item" key={nanoid(7)}>
            <span className="reviews-section-list__item-name">
              {result.author}
            </span>
            <span className="reviews-section-list__item-content">
              {result.content}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReviewsPage;
