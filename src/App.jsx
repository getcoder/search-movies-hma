import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import Home2 from './Home2';
import AboutFilm from './info_page/AboutFilm';
import AboutFilm2 from './info_page/AboutFilm2';

import Search from './components/Search';
import ResultsList from './components/ResultsList';
import ResultsListClass from './components/ResultsListClass';


class App extends Component {
  state = {
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
      key = '&api_key=5635d724d799fa6033209f3cf8705ee0';

    if (parametr == 's') {
      url = "https://api.themoviedb.org/3/movie/popular?region=Russia&page=1&language=en-US&api_key=5635d724d799fa6033209f3cf8705ee0"
    } else {
      url = url + mode + parametr + key
    };

    fetch(`${url}`)
      .then(response => response.json())
      // .then(parsedJSON => console.log("shjshkjhkjh-----", parsedJSON.results))
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
    const { isLoading, serverAnswer, search } = this.state;
    // console.log('search--', search);
    // var searchbla = search;
    // console.log('searchbla--', searchbla);
    // var serverAnswerbla = serverAnswer;
    // console.log('serverAnswerbla--', serverAnswerbla);

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">AboutFilm</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
            <li>
              <Link to="/page">page-{search}</Link>
            </li>
          </ul>



          <Search updateData={this.updateData} />


          <hr />

          <Route exact path="/" component={Home} />

          {/* <Route exact path="/page" component={ResultsListClass} /> */}

          {/* <Route path="/page" render={(search) => <ResultsListClass num="2" someProp={100} eben={searchbla} serverAnswerbla={serverAnswerbla} />} /> */}
          <Route path="/page" render={() => <ResultsList searchResults={serverAnswer} />} />


          <Route path="/about" component={AboutFilm} />
          <Route path="/search" component={Home2} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
