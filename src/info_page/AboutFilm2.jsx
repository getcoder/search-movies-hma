import React, { Component } from 'react';
import '../styles/filminfo.css';

import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";

class AboutFilm2 extends Component {
    state = {
        trailer: '',
        serverAnswer: []
    }

    componentDidMount() {
        this.fetchData(this.props.match.params.id);
    }

    fetchData(parametr) {
        let mainURL = 'https://api.themoviedb.org/3/movie/',
            id = parametr,
            mode = '?language=en-US',
            videos4film = '/videos',
            key = '&api_key=5635d724d799fa6033209f3cf8705ee0';

        let url = mainURL + id + mode + key;

        fetch(`${url}`)
            .then(response => response.json())
            .then(parsedJSON => (
                {
                    id: `${parsedJSON.id}`,
                    original_title: `${parsedJSON.original_title}`,
                    overview: `${parsedJSON.overview}`,
                    poster_path: `${parsedJSON.poster_path}`,
                    backdrop_path: `${parsedJSON.backdrop_path}`,
                    release_date: `${parsedJSON.release_date}`
                }
            ))
            .then(serverAnswer => this.setState({
                serverAnswer
            }))
            .catch(error => console.error('parsing failed', error))

        url = mainURL + id + videos4film + mode + key;

        fetch(`${url}`)
            .then(response => response.json())
            .then(parsedJSON => (
                {
                    trailer: `${parsedJSON.results[0].key}`
                }
            ))
            .then(trailer => this.setState({
                trailer
            }))
            .catch(error => console.error('parsing failed', error))
    }

    render() {
        const { serverAnswer, trailer } = this.state;
        var posterPath;

        if (serverAnswer.poster_path === 'null') {
            posterPath = "http://www.clker.com/cliparts/q/L/P/Y/t/6/no-image-available-md.png";
        } else {
            posterPath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + serverAnswer.poster_path;
        }
        var prePoster = "https://cdn.glitch.com/620c4a0a-2074-43a8-be95-6f8ab3bee884%2F1.gif?1518536619720";

        // пример определения стиля
        const divStyle = {
            color: 'blue',
            backgroundColor: 'red',
            backgroundImage: "url(https://cdn.glitch.com/620c4a0a-2074-43a8-be95-6f8ab3bee884%2F1.gif?1518536619720)"
        };

        var ytbURL = "https://www.youtube.com/watch?v=";
        var youtubego = ytbURL + this.state.trailer.trailer; // нужна доработка для ситуаций отсутствия трейлеров
        return (
            // <div style={divStyle} id="custom_bg" className='sfsff'> //пример использования стилей
            <div id="custom_bg" className='sfsff'>

                <Link to='/about'>Back</Link>

                <div className="image_content">
                    <img className="poster" src={posterPath} alt="" />
                </div>

                <div className="header_poster_wrapper">
                    <span><h2 className="main-title">{serverAnswer.original_title}</h2>
                        <span className="release_date">{serverAnswer.release_date}</span>
                    </span>

                    <a target="_blank" href={youtubego}><img width="5%" src="http://mforum.ist/data/avatars/o/59/59749.jpg?1520514043" /></a>
                    <h3 dir="auto">Overview</h3>
                    <p>{serverAnswer.overview}</p>
                    <h3 className="featured" dir="auto">Создатели</h3>
                    <ol className="people_no_image">
                        <li className="profile">
                            <p className="person-name"><a href="/person/10967-steve-kloves">Steve Kloves</a></p>
                            <p className="character">Screenplay</p>
                        </li>
                        <li className="profile">
                            <p className="person-name"><a href="/person/10966-j-k-rowling">J.K. Rowling</a></p>
                            <p className="character">Novel</p>
                        </li>
                        <li className="profile">
                            <p className="person-name"><a href="/person/10965-chris-columbus">Chris Columbus</a></p>
                            <p className="character">Director</p>
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default AboutFilm2;