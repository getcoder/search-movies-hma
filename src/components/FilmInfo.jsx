import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";

function FilmInfo({ id, title, poster, overview, releaseDate }) {

    const docHref = `/about/${id}`;

    var posterPath;

    if (poster === 'null') {
        posterPath = "http://www.clker.com/cliparts/q/L/P/Y/t/6/no-image-available-md.png";
    } else {
        posterPath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + poster;
    }
    var prePoster = "https://cdn.glitch.com/620c4a0a-2074-43a8-be95-6f8ab3bee884%2F1.gif?1518536619720";

 
    return (
        <BrowserRouter>
            <div>
                <div className='item_poster_card effect7'>
                    <div className='image_content'>
                        <img className="poster" width='185px' presrc={prePoster} src={posterPath} />
                    </div>
                    <div className='info'>
                        <div className='wrapper'>
                            <div className='flex'>
                                <Link to={`/about/${id}`} target="_blank">{title}</Link>
                                <span>{releaseDate}</span>
                            </div>
                        </div>
                        <p className='overview'>{overview}</p>
                        <p className='view_more'>
                            <a id='movie_672' data-id='4bc89159017a3c122d00c288' data-media-type='movie' className='result' href={docHref} title={title}>Подробнее</a>
                        </p>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default FilmInfo;