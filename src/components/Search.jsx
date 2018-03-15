import React from 'react';

import '../styles/search.css';

function Search({ updateData }) {
    return (
        <div className="jumbotron">
            <h3 className="text-center">Search For Any Movie</h3>
            <form className="searchForm" id="searchForm"
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        updateData(document.getElementById('searchText').value)
                    }
                }>
                <input type="text" className="form-control" id="searchText" placeholder="Search Movies..." />
            </form>
        </div>
    );
}

export default Search;