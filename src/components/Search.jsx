import React from 'react';

function Search({ updateData }) {
    return (
        <div className="jumbotron">
            <h3 className="text-center">Search For Any Movie</h3>
            <form id="searchForm" method="get" action="/search/"
                onSubmit={
                    (e) => {
                        // e.preventDefault();
                        var fa = document.getElementById('searchForm');
                        var input = document.getElementById('searchText').value;
                        fa.action="/search/"+input;
                    }
                }>
                <input type="text" className="form-control" id="searchText" placeholder="Search Movies..." />
            </form>
        </div>
    );
}

export default Search;