import React, { Component } from 'react';
import FindedMovies from 'components/sectionFindedMovies/findedmovies';
import Moviefinder from 'components/pageMovieFinder/moviefinder';

class MoviesPage extends Component {
  state = {
    movies: [],
  };

  findMovie = async e => {
    e.preventDefault();
    return await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=980a4807ed2affd0839f21d41b2cd33d&language=en-US&query=${this.props.movieToFind}?&page=1&include_adult=false`
    )
      .then(response => {
        if (response.ok) return response.json();
        throw new Error();
      })
      .then(response => {
        this.setState({
          movies: response.results,
        });
      });
  };

  componentWillUnmount() {
    this.setState({ movies: [] });
  }

  render() {
    return (
      <>
        <Moviefinder
          handleWord={this.props.handleWord}
          findMovie={this.findMovie}
        />
        {this.state.movies.length > 0 && (
          <FindedMovies movies={this.state.movies} />
        )}
      </>
    );
  }
}

export default MoviesPage;
