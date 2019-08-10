import React, { Component } from 'react';

import '../styles/aboutfilm.css';

class AboutFilm extends Component {
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

        // const divStyle = {
        //     color: 'blue',
        //     backgroundColor: 'red',
        //     backgroundImage: "url(https://cdn.glitch.com/620c4a0a-2074-43a8-be95-6f8ab3bee884%2F1.gif?1518536619720)"
        // };

        const divStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundImage: `url(${bgrndURL})`
        };

        var ytbURL = "https://www.youtube.com/watch?v=";
        var youtubego = ytbURL + this.state.trailer.trailer; // нужна доработка для ситуаций отсутствия трейлеров
        return ( 
            <div id="custom_bg" style={divStyle} className='custom_bg'>
            <div className="single_column">
                <div className="image_content">
                    <img className="poster" onClick={this.props.togglePopup} src={posterPath} alt="poster img" />
                </div>

                <div className="header_poster_wrapper">
                    <span><h2 className="main-title">{serverAnswer.original_title}</h2>
                        <span className="release_date">{serverAnswer.release_date}</span>
                    </span>
                    {/* <div className="youtube-area" > */}
                        <a target="_blank" className="youTube-logo" href={youtubego}><img className="logo4youtubebtn" img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png"/></a>
                    {/* </div> */}
                    
                    <h3 dir="auto">Overview</h3>
                    <p>{serverAnswer.overview}</p>
                    <h3 className="featured" dir="auto">Creators</h3>
                    <ul className="people_no_image">
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
                    </ul>
                    <div className="returnbtn" >
                        <button onClick={this.props.showInfo} >Go Home</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AboutFilm;