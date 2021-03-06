import React, { Component } from 'react';

import '../styles/aboutfilm.css';


class AboutFilm extends Component {
    state = {
        trailer: '',
        serverAnswer: []
    }

    getId() {
        var str = window.location.href;
        var id = str.slice((str.lastIndexOf("#")) + 1);
        return id;
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let url = 'https://api.themoviedb.org/3/movie/',
            mode = '?language=en-US',
            key = '&api_key=5635d724d799fa6033209f3cf8705ee0';

        url = url + this.getId() + mode + key;

        fetch(`${url}`)
            .then(response => response.json())
            // .then(parsedJSON => console.log('res=', parsedJSON))
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



        var url_trailer = "https://api.themoviedb.org/3/movie/" + this.getId() + "/videos?language=en-US&api_key=5635d724d799fa6033209f3cf8705ee0";

        fetch(`${url_trailer}`)
            .then(response => response.json())
            // .then(parsedJSON => console.log('res=', parsedJSON.results[3]))
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
        console.log("rend=", serverAnswer);
        console.log("trailer=", trailer);
        var posterPath;
        if (serverAnswer.poster_path === 'null') {
            posterPath = "http://www.clker.com/cliparts/q/L/P/Y/t/6/no-image-available-md.png";
        } else {
            posterPath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + serverAnswer.poster_path;
        }
        var prePoster = "https://cdn.glitch.com/620c4a0a-2074-43a8-be95-6f8ab3bee884%2F1.gif?1518536619720";

        let bgrndURL = "https://image.tmdb.org/t/p/w1400_and_h450_face" + this.state.serverAnswer.backdrop_path;

        //         var backURL = "https://image.tmdb.org/t/p/w1400_and_h450_face" + serverAnswer.poster_path;
        // var popka = document.getElementById('cutom_bg');
        // console.log('popka=', popka);

        //         popka.style.backgroundImage = "url('" + backURL + "')";
        // var mystyle = {
        //     backgroundImage: "https://cdn.glitch.com/620c4a0a-2074-43a8-be95-6f8ab3bee884%2F1.gif?1518536619720"
        // }
        // const divStyle = {
        //     color: 'blue',
        //     backgroundColor: 'red',
        //     backgroundImage: "url(https://cdn.glitch.com/620c4a0a-2074-43a8-be95-6f8ab3bee884%2F1.gif?1518536619720)",
        // };

        const divStyle = {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundImage: `url(${bgrndURL})`
            };
    

        var ytbURL = "https://www.youtube.com/watch?v=";
        // $(".play_trailer")[0].href = ytbURL + response.results[0].key;
        // $('.play_trailer').click(function () { });
        console.log('stat-tra=', this.state.trailer.trailer);
        
        var youtubego = ytbURL + this.state.trailer.trailer;
        return (

            // <div style={divStyle} id="custom_bg" className='sfsff'> //пример использования стилей
            <div id="custom_bg" style={divStyle} className='custom_bg'>
                <div class="single_column">
                    <div className="image_content">
                        <img className="poster" src={posterPath} alt="" />
                    </div>

                    <div className="header_poster_wrapper">
                        {/* <div class="title" dir="auto"> */}
                        <span><h2 className="main-title">{serverAnswer.original_title}</h2>
                            <span className="release_date">{serverAnswer.release_date}</span>
                        </span>
                        {/* </div> */}

                        <a target="_blank" className="youTube-logo" href={youtubego}><img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png"/></a>
                        {/* <a target="_blank" href={youtubego}><img width="5%" src="https://pngicon.ru/file/uploads/youtube-1.png"/></a> */}
                     
                        <h3 dir="auto">Overview</h3>
                        {/* <div class="overview" dir="auto"> */}
                        <p>{serverAnswer.overview}}</p>
                        {/* </div> */}
                        <h3 className="featured" dir="auto">Creators :</h3>
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
            </div>
            // </div>
            // </div>

            // </div>
        );
    }
}

export default AboutFilm;