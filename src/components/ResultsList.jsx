import React from 'react';
import FilmInfo from './FilmInfo';

import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";


function ResultsList({ searchResults }) {
    const filmResult = searchResults.map(                        // перебираем массив результата поиска и превращаем 
        //    searchResult => <FilmInfo searhResult = {searchResult}/> //каждый элемент массива в реакт элемент                                                                
        searchResult => (
            <div key={searchResult.id}>
                <FilmInfo
                    id={searchResult.id}
                    title={searchResult.original_title}
                    poster={searchResult.poster_path}
                    overview={searchResult.overview}
                    releaseDate={searchResult.release_date} />
            </div>
        )
    )

    return (
        <div>
            {filmResult}
        </div>
    );
}

export default ResultsList;