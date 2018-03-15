import React from 'react';
import FilmInfo from './FilmInfo';

function ResultsList({ getChild, searchResults }) {
   const filmResult = searchResults.map(                        // перебираем массив результата поиска и превращаем 
    //    searchResult => <FilmInfo searhResult = {searchResult}/> //каждый элемент массива в реакт элемент                                                                
       searchResult => <FilmInfo key={searchResult.id}
                                 id={searchResult.id}
                                 title={searchResult.original_title}
                                 poster={searchResult.poster_path}
                                 overview={searchResult.overview}
                                 getChild={getChild}
                                 releaseDate = {searchResult.release_date}/>                                                           
   )

//   function getChild (value) {
//     console.log('valz-', value);    
//   }

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