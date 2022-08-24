import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import TrendingList from 'components/trending/trendinglist';
import MoviePage from 'components/moviepage/moviepage';
import TrendingButton from 'components/header/header';

class AppWrapper extends Component {
  state = {
    trending: [],
    chosenMovie: {},
    // response: {
    //   adult: false,
    //   backdrop_path: '/jwFBzWabfWpnN9P5YIVVX5W8WUY.jpg',
    //   belongs_to_collection: null,
    //   budget: 0,
    //   genres: [
    //     {
    //       id: 53,
    //       name: 'Thriller',
    //     },
    //     {
    //       id: 9648,
    //       name: 'Mystery',
    //     },
    //     {
    //       id: 35,
    //       name: 'Comedy',
    //     },
    //   ],
    //   homepage: 'https://www.focusfeatures.com/vengeance',
    //   id: 683340,
    //   imdb_id: 'tt11976532',
    //   original_language: 'en',
    //   original_title: 'Vengeance',
    //   overview:
    //     'A journalist and podcaster from New York City travels to West Texas in order to report on the death of a girl he was hooking up with.',
    //   popularity: 107.164,
    //   poster_path: '/35btMdT6q2OYf2LYWB4S3D3edCQ.jpg',
    //   production_companies: [
    //     {
    //       id: 3172,
    //       logo_path: '/kDedjRZwO8uyFhuHamomOhN6fzG.png',
    //       name: 'Blumhouse Productions',
    //       origin_country: 'US',
    //     },
    //     {
    //       id: 10146,
    //       logo_path: '/xnFIOeq5cKw09kCWqV7foWDe4AA.png',
    //       name: 'Focus Features',
    //       origin_country: 'US',
    //     },
    //   ],
    //   production_countries: [
    //     {
    //       iso_3166_1: 'US',
    //       name: 'United States of America',
    //     },
    //   ],
    //   release_date: '2022-07-29',
    //   revenue: 3000000,
    //   runtime: 108,
    //   spoken_languages: [
    //     {
    //       english_name: 'English',
    //       iso_639_1: 'en',
    //       name: 'English',
    //     },
    //   ],
    //   status: 'Released',
    //   tagline: 'Find the story before it finds you.',
    //   title: 'Vengeance',
    //   video: false,
    //   vote_average: 7.243,
    //   vote_count: 37,
    // },
  };

  loadPage = async e => {
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

  // chooseMovie = async e => {
  //   console.log(1);
  //   return await fetch(
  //     `https://api.themoviedb.org/3/movie/${e.target.id}?api_key=980a4807ed2affd0839f21d41b2cd33d`
  //   )
  //     .then(response => {
  //       if (response.ok) return response.json();
  //       console.log(2);
  //       throw new Error();
  //     })
  //     .then(response => {
  //       this.setState({ chosenMovie: response });
  //       console.log(3);
  //       // console.log(this.state.chosenMovie);
  //       // response.results.map(result => console.log(result.name))
  //       // this.setState({ trending: response.results });
  //       // console.log(this.state.trending);
  //       // this.state.trending.map(result => console.log(result.name || result.title))
  //       // console.log(this.state.response);
  //     })
  //     // .finally(
  //     //   window.history.push()
  //     // )
  // };

  componentDidMount() {
    this.loadPage();
  }

  render() {
    return (
      <>
      <TrendingButton/>
        {/* <Link to="/">Trending</Link> */}
        {/* {console.log(this.state.chosenMovie)} */}
        <Routes>
          <Route
            path="/"
            element={<TrendingList trending={this.state.trending} />}
          />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </>
    );
  }
}
export { AppWrapper };
