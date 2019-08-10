import React, { Component } from 'react';

import Search from './components/Search';
import SearchClass from './components/SearchClass';
import ResultsList from './components/ResultsList';
import ResultsListclass from './components/ResultsListClass';
// import AboutFilm2 from './info_page/AboutFilm2';
import AboutFilm from './components/AboutFilm';
import Popup from './components/Popup';

import './styles/popup.css';

class Home extends Component {
  state = {
    showPopup: false,
    id: '',
    info: false,
    search: 's',
    serverAnswer: []
  }

  componentDidMount() {
    this.fetchData(this.state.search);
  }

  goHome = () => {
    this.setState({
      search: 's',
      info: false
    })
    this.fetchData(this.state.search);
  }

  fetchData(parametr) {
    let mainURL = 'https://api.themoviedb.org/3/',
      mode = 'search/movie?query=',
      key = '&api_key=5635d724d799fa6033209f3cf8705ee0';
    let url;

    if (parametr == 's') {
      url = "https://api.themoviedb.org/3/movie/popular?region=Russia&page=1&language=en-US&api_key=5635d724d799fa6033209f3cf8705ee0"
    } else {
      url = mainURL + mode + parametr + key
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
    this.setState({
      info: false
    })
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

  togglePopup =() => {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }


  render() {
    const { serverAnswer, id } = this.state;
    return (
      <div className="Home">
        {this.state.info ? (
          <div>
            {/* <button onClick={this.showInfo} >nazad</button> */}
            <button onClick={this.goHome} >Main Page</button>
            {console.log("wuriwg = ", this.state.search)}
            <button onClick={this.togglePopup} >show popup on about page</button>

            <Search updateData={this.updateData} />
            {/* <AboutFilm2 id={id} showInfo={this.showInfo} togglePopup={this.togglePopup} /> */}
            <AboutFilm id={id} showInfo={this.showInfo} togglePopup={this.togglePopup} />
          </div>
        ) : (
            <div>
              <button onClick={this.goHome} >HomePage</button>
              <button onClick={this.togglePopup} >show popup on main page</button>

              {/* <Search updateData={this.updateData} /> */}
              <SearchClass updateData={this.updateData} />
              {/* <ResultsList getChild={this.getChild} searchResults={serverAnswer} /> */}
              <ResultsListclass getChild={this.getChild} searchResults={serverAnswer} />
            </div>
          )}
        {this.state.showPopup ? <Popup text='This is Popup!!!' closePopup={this.togglePopup} /> : null}
      </div>
    );
  }
}

export default Home;
