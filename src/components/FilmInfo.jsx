import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutFilm from '../info_page/AboutFilm';

function FilmInfo({ id, title, poster, overview, releaseDate }) {

    // const docHref = `../info_page/filminfo.html?id=${id}`;
    const docHref = `../info_page/filminfo.html`;

    var posterPath;

    if (poster === 'null') {
        posterPath = "http://www.clker.com/cliparts/q/L/P/Y/t/6/no-image-available-md.png";
    } else {
        posterPath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + poster;
    }
    var prePoster = "https://cdn.glitch.com/620c4a0a-2074-43a8-be95-6f8ab3bee884%2F1.gif?1518536619720";

    return (
        <Router>
            <div>

                <div className='item_poster_card effect7'>
                    <div className='image_content'>
                        <img className="poster" width='185px' presrc={prePoster} src={posterPath} />
                    </div>
                    <div className='info'>
                        <div className='wrapper'>
                            <div className='flex'>
                                {/* <a id='movie_672_go' className='title_result' target="_blank" href={docHref} title={title}>{title}</a> */}
                                {/* <Link to="/about" target="_blank">AboutFilm</Link> */}
                                <Link to={`/about#${id}`} target="_blank">{title}</Link>
                                <span>{releaseDate}</span>
                            </div>
                        </div>
                        <p className='overview'>{overview}</p>
                        <p className='view_more'>
                            <a id='movie_672' data-id='4bc89159017a3c122d00c288' target="_blank" data-media-type='movie' className='result' href='/filminfo.html?id=${id}' title={title}>Подробнее</a>
                        </p>
                    </div>
                </div>

                {/* <Route exact path="/" component={App} /> */}
                {/* <Route path="/aboutfilm" component={AboutFilm} /> */}

            </div>
        </Router>
    );
}

export default FilmInfo;