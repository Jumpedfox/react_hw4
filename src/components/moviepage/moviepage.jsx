import React, { Component } from 'react';
// import { useNavigate } from 'react-router-dom';
import './moviepage.scss';

class MoviePage extends Component {
  state = {
    movie: '',
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
      });
  };

  componentDidMount() {
    this.chooseMovie();
  }

  render() {
    return (
      <div
        className="movie-page"
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.state.movie.poster_path}")`,
        }}
      >
        <button className="movie-page__button-back"></button>
        <span className="movie-page__name">{this.state.movie.title}</span>
        <span className="msovie-page__rating">
          {this.state.movie.vote_average}
        </span>
        <span className="movie-page__overview">
          {this.state.movie.overview}
        </span>
      </div>
    );
  }
}

export default MoviePage;
