import React from 'react';

const Search = ({ searchTerm, setSearchTerm, onSearch }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default Search;
