import React, { Component } from 'react';
// import './Home.css';
import './styles/cinema.css';

import Search from './components/Search';
import SearchClass from './components/SearchClass';
import FilmInfo from './components/FilmInfo';
import ResultsList from './components/ResultsList';
import AboutFilm2 from './info_page/AboutFilm2';

class Home extends Component {
  state = {
    name: 'Бумеранг не запущен',
    id: '',
    info: false,
    search: 's',
    isLoading: true,
    serverAnswer: []
  }

  componentDidMount() {
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

  showInfo = () => {
    this.setState({
      info: !this.state.info
    })
  }

  getChild = (value) => {
    this.setState({ id: value });
    this.setState({ info: true }, () => console.log(this.state))
  }

  render() {
    const { isLoading, serverAnswer, id } = this.state;
    return (
      <div className="Home">

        {/* <SearchClass updateData={this.updateData} /> */}
        {/* <Search updateData={this.updateData} /> */}

        {/* {this.state.info ? <AboutFilm/> : <ResultsList searchResults={serverAnswer} />} */}
        {this.state.info ? (
          <div>
            <button onClick={this.showInfo} >nazad</button>
            <AboutFilm2 id={id} />
          </div>
        ) : <ResultsList getChild={this.getChild} searchResults={serverAnswer} />}
        {/* <AboutFilm /> */}
        {/* <ResultsList searchResults={serverAnswer} /> */}
      </div>
    );
  }
}

export default Home;
