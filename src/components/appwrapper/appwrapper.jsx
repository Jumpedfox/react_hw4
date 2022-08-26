import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import TrendingList from 'components/pageTrending/trendinglist';
import MoviePage from 'components/pageMovie/moviepage';
import Header from 'components/sectionHeader/header';
import MoviesPage from 'components/pageMovies/moviespage';

class AppWrapper extends Component {
  state = {
    trending: [],
    chosenMovie: {},
    movieToFind: '',
    findedMovies: [],
  };

  loadTrending = async e => {
    return await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=980a4807ed2affd0839f21d41b2cd33d`
    )
      .then(response => {
        if (response.ok) return response.json();
        throw new Error();
      })
      .then(response => {
        this.setState({ trending: response.results });
      });
  };

  handleWord = e => {
    this.setState({ movieToFind: e.target.value });
  };
  componentDidMount() {
    this.loadTrending();
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<TrendingList trending={this.state.trending} />}
          />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route
            path="/movies"
            element={
              <MoviesPage
                movieToFind={this.state.movieToFind}
                handleWord={this.handleWord}
                movies={this.state.findedMovies}
              />
            }
          />
        </Routes>
      </>
    );
  }
}
export { AppWrapper };
