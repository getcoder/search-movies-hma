import React, { Component } from 'react';

import './styles/cinema.css';

import ResultsList from './components/ResultsList';

class Popular extends Component {
  state = {
    serverAnswer: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let url = "https://api.themoviedb.org/3/movie/popular?region=Russia&page=1&language=en-US&api_key=5635d724d799fa6033209f3cf8705ee0";

    fetch(`${url}`)
      .then(response => response.json())
      .then(parsedJSON => parsedJSON.results.map(film => (
        {
          id: `${film.id}`,
          original_title: `${film.original_title}`,
          overview: `${film.overview}`,
          poster_path: `${film.poster_path}`,
          backdrop_path: `${film.backdrop_path}`,
          release_date: `${film.release_date}`
        }
      )))
      .then(serverAnswer => this.setState({
        serverAnswer
      }))
      .catch(error => console.error('parsing failed', error))
  }

  render() {
    const { serverAnswer } = this.state;
    return (
      <div>
        <div>cocok</div>
        <ResultsList searchResults={serverAnswer} />
      </div>
    );
  }
}

export default Popular;
