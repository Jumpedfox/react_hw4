import React, { Component } from 'react';
import './moviepage.scss';
import GoBack from 'components/buttonBack/buttonback';
import CastPage from 'components/sectionCast/castpage';
import ReviewsPage from 'components/sectionReview/reviewspage';

class MoviePage extends Component {
  state = {
    movie: '',
    rating: '',
    cast: [],
    reviews: [],
    showCastButton: false,
    showReviewsButton: false,
  };

  chooseMovie = async e => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${window.location.pathname.slice(
        7
      )}?api_key=980a4807ed2affd0839f21d41b2cd33d`
    )
      .then(response => {
        if (response.ok) return response.json();
        throw new Error();
      })
      .then(response => {
        this.setState({ movie: response });
        this.setState({ rating: response.vote_average.toFixed(1) });
      });
  };

  showCast = async e => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${this.state.movie.id}/credits?api_key=980a4807ed2affd0839f21d41b2cd33d&language=en-US`
    )
      .then(response => {
        if (response.ok) return response.json();
        throw new Error();
      })
      .then(response => {
        this.setState({ cast: response.cast });
        this.state.showCastButton === false
          ? this.setState({ showCastButton: true })
          : this.setState({ showCastButton: false });
        this.state.showReviewsButton === true &&
          this.setState({ showReviewsButton: false });
      });
  };

  showReviews = async e => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${this.state.movie.id}/reviews?api_key=980a4807ed2affd0839f21d41b2cd33d&language=en-US`
    )
      .then(response => {
        if (response.ok) return response.json();
        throw new Error();
      })
      .then(response => {
        this.setState({ reviews: response.results });
        this.state.showReviewsButton === false
          ? this.setState({ showReviewsButton: true })
          : this.setState({ showReviewsButton: false });
        this.state.showCastButton === true &&
          this.setState({ showCastButton: false });
      });
  };

  componentDidMount() {
    this.chooseMovie();
  }

  render() {
    return (
      <>
        <section className="page-movie-wrapper">
          <GoBack />
          <div className="page-movie">
            <div className="page-movie__image-section">
              <img
                className="page-movie__image-section__image"
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.state.movie.poster_path}`}
                alt="123"
              />
              <span className="page-movie__image-section__rating">
                Rating: {this.state.rating}/10
              </span>
              <div className="page-movie__image-section__buttons">
                <button
                  className="page-movie__image-section__button"
                  onClick={this.showCast}
                >
                  SHOW CAST
                </button>
                <button
                  className="page-movie__image-section__button"
                  onClick={this.showReviews}
                >
                  SHOW REVIEWS
                </button>
              </div>
            </div>
            <div className="page-movie__info-section">
              <span className="page-movie__info-section__name">
                {this.state.movie.title}
              </span>
              <span className="page-movie__info-section__overview">
                {this.state.movie.overview}
              </span>
            </div>
          </div>
          {this.state.showCastButton === true && (
            <CastPage cast={this.state.cast} />
          )}
          {this.state.showReviewsButton === true && (
            <ReviewsPage reviews={this.state.reviews} />
          )}
        </section>
      </>
    );
  }
}

export default MoviePage;
