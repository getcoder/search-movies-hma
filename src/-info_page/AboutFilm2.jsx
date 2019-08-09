import React, { Component } from 'react';

import AboutFilm from '../components/AboutFilm';

class AboutFilm2 extends Component {
    state = {
        trailer: '',
        serverAnswer: []
    }

    // getId() {
    //     var str = window.location.href;
    //     var id = str.slice((str.lastIndexOf("#")) + 1);
    //     return id;
    // }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let mainURL = 'https://api.themoviedb.org/3/movie/',
            id = this.props.id,
            mode = '?language=en-US',
            videos4film = '/videos',
            key = '&api_key=5635d724d799fa6033209f3cf8705ee0';

        let url = mainURL + id + mode + key;

        fetch(`${url}`)
            .then(response => response.json())
            // .then(parsedJSON => console.log("sfjsflfj - ", parsedJSON))
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

        // console.log("rend=", serverAnswer);
        // console.log("trailer=", trailer);
        var posterPath;
        if (serverAnswer.poster_path === 'null') {
            posterPath = "http://www.clker.com/cliparts/q/L/P/Y/t/6/no-image-available-md.png";
        } else {
            posterPath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + serverAnswer.poster_path;
        }
        var prePoster = "https://cdn.glitch.com/620c4a0a-2074-43a8-be95-6f8ab3bee884%2F1.gif?1518536619720";

        let bgrndURL = "https://image.tmdb.org/t/p/w1400_and_h450_face" + this.state.serverAnswer.backdrop_path;

        const divStyle = {
            color: 'blue',
            backgroundColor: 'red',
            backgroundImage: "url(https://cdn.glitch.com/620c4a0a-2074-43a8-be95-6f8ab3bee884%2F1.gif?1518536619720)"
        };

        var ytbURL = "https://www.youtube.com/watch?v=";
        var youtubego = ytbURL + this.state.trailer.trailer; // нужна доработка для ситуаций отсутствия трейлеров
        return (
            <AboutFilm getChild={this.props.getChild} togglePopup={this.props.togglePopup} showInfo={this.props.showInfo} serverAnswer={serverAnswer} posterPath={posterPath} bgrndURL={bgrndURL} youtubego={youtubego} />
        );
    }
}

export default AboutFilm2;