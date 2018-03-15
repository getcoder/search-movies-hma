import React from 'react';
import FilmInfo from './FilmInfo';

class ResultsListClass extends React.Component {

    render() {
        {console.log('props--', this.props)}
        
        let propopo = this.props.eben;
        {console.log('propopo--', propopo)}
        return (
            <div>daskjfh---
                {propopo}
                {/* <FilmInfo />
           <FilmInfo />
           <FilmInfo /> */}
                {/* {filmResult} */}
            </div>
        );
    }
}

export default ResultsListClass;