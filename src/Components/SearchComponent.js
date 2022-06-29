import React from 'react';

function SearchComponent() {
    return (
        <div className='search' >
            <input type='text' placeholder='Search'/>
            <button className='button primary'>Search</button>
        </div>
    );
}

export default SearchComponent;