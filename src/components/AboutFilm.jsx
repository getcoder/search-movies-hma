import React from 'react';

import '../styles/aboutfilm.css';


function AboutFilm({ serverAnswer, posterPath, bgrndURL, youtubego, showInfo, togglePopup }) {

    // let backgrnd = document.getElementById("custom_bg");

    const divStyle = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundImage: `url(${bgrndURL})`
    };

    // const cursor4ik = {
    //     cursor: 'pointer'
    // };

    // backgrnd.style.backgroundImage = "url('" + bgrndURL + "')";

    return (
        <div id="custom_bg" style={divStyle} className='custom_bg'>
            <div className="single_column">
                <div className="image_content">
                    <img className="poster" onClick={togglePopup} src={posterPath} alt="poster img" />
                </div>

                <div className="header_poster_wrapper">
                    <span><h2 className="main-title">{serverAnswer.original_title}</h2>
                        <span className="release_date">{serverAnswer.release_date}</span>
                    </span>
                    <div className="youtube-area" >
                        <a target="_blank" className="youtube-btn" href={youtubego}><img className="logo4youtubebtn" src="http://mforum.ist/data/avatars/o/59/59749.jpg?1520514043" /></a>
                    </div>
                    <h3 dir="auto">Overview</h3>
                    <p>{serverAnswer.overview}</p>
                    <h3 className="featured" dir="auto">Создатели</h3>
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
                        <button onClick={showInfo} >nazad</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutFilm;