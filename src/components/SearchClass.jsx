import React from 'react';

class SearchClass extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h3 className="text-center">Search For Any Movie</h3>
                <form id="searchForm"
                onSubmit={(e) => {
                    e.preventDefault();
                    var input = document.getElementById('searchText').value;
                    console.log('znachen = ', input);
                    this.props.updateData(input)
                }}
                >
                    <input type="text" className="form-control" id="searchText" placeholder="Search Movies..." />
                </form>               
            </div>
        );
    }
}

export default SearchClass;