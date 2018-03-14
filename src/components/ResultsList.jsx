import React from 'react';
import FilmInfo from './FilmInfo';

function ResultsList({ searchResults }) {
   const filmResult = searchResults.map(                        // перебираем массив результата поиска и превращаем 
    //    searchResult => <FilmInfo searhResult = {searchResult}/> //каждый элемент массива в реакт элемент                                                                
       searchResult => <FilmInfo key={searchResult.id}
                                 id={searchResult.id}
                                 title={searchResult.original_title}
                                 poster={searchResult.poster_path}
                                 overview={searchResult.overview}
                                 releaseDate = {searchResult.release_date}/>                                                           
   )

    return (
        <div>
           {/* <FilmInfo />
           <FilmInfo />
           <FilmInfo /> */}
           {filmResult}
        </div>
    );
}

export default ResultsList;