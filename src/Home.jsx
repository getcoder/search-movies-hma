import React, { Component } from 'react';
// import './Home.css';
// import './styles/cinema.css';

import Search from './components/Search';
import SearchClass from './components/SearchClass';
import FilmInfo from './components/FilmInfo';
import ResultsList from './components/ResultsList';

class Home extends Component {
  state = {
    search: this.props.statte,
    isLoading: true,
    serverAnswer: []
  }

  componentDidMount() {    
    this.fetchData(this.state.search);
  }
  componentWillReceiveProps(){
    this.fetchData(this.state.search); 
  }

  fetchData(parametr) {
    let url = 'https://api.themoviedb.org/3/',
      mode = 'search/movie?query=',
      movieName,
      key = '&api_key=5635d724d799fa6033209f3cf8705ee0';

    if (parametr == 's') {
      url = "https://api.themoviedb.org/3/movie/popular?region=Russia&page=1&language=en-US&api_key=5635d724d799fa6033209f3cf8705ee0"
    } else {
      url = url + mode + parametr + key
    };

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
        serverAnswer,
        isLoading: false
      }))
      .catch(error => console.error('parsing failed', error))
  }

  updateData = (value1) => {
    this.fetchData(value1);
  }

  render() {
    const { isLoading, serverAnswer } = this.state;
    return (
      <div className="Home">
        {/* <SearchClass updateData={this.updateData} /> */}
        <Search updateData={this.updateData} />
        <ResultsList searchResults={serverAnswer} />
      </div>
    );
  }
}

export default Home;
