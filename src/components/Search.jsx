import React from 'react';

import '../styles/search.css';

function Search({ updateData }) {
    return (
        <div className="jumbotron">
            <h3 className="text-center">Search For Any Movie</h3>
            <form id="searchForm" className="searchForm"
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        var input = document.getElementById('searchText').value;
                        console.log('znachen = ', input);
                        updateData(input)
                        document.getElementById('searchText').value = "";
                    }
                }>
                <input type="text" className="form-control" id="searchText" placeholder="  Search Movies..." />
                <div className="centerButton"><button href="#" className="button7">Search</button></div>
            </form>
        </div>
    );
}

export default Search;