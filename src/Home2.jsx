import React, { Component } from 'react';
import './styles/cinema.css';

import ResultsList from './components/ResultsList';

class Home2 extends Component {
  state = {
    serverAnswer: []
  }

  componentDidMount() {
    this.fetchData(this.props.match.params.query);
  }

  fetchData(parametr) {
    let url = 'https://api.themoviedb.org/3/search/movie?query=' + parametr + '&api_key=5635d724d799fa6033209f3cf8705ee0';

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
      <div className="Home">
        <ResultsList getChild={this.getChild} searchResults={serverAnswer} />
      </div>
    );
  }
}

export default Home2;
