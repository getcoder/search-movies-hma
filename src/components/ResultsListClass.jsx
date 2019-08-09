import React, { Component } from 'react';
import FilmInfo from './FilmInfo';

class ResultsListClass extends Component {

    render() {

        const filmResult = this.props.searchResults.map(                    // перебираем массив результата поиска и превращаем 
            //    searchResult => <FilmInfo searhResult = {searchResult}/> //каждый элемент массива в реакт элемент                                                                
               searchResult => <FilmInfo key={searchResult.id}
                                         id={searchResult.id}
                                         title={searchResult.original_title}
                                         poster={searchResult.poster_path}
                                         overview={searchResult.overview}
                                         getChild={this.props.getChild}
                                         releaseDate = {searchResult.release_date}/>                                                           
           )

        return (
            <div>
                {filmResult}               
            </div>
        );
    }
}

export default ResultsListClass;