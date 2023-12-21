import React, { useState } from 'react';
import '../CSS/Search.css';

type Props = {
    handleSearch: React.MouseEventHandler<HTMLButtonElement>
};

const Search: React.FC = ({handleSearch} : Props) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className='search-container'>
            <input className='search-input' type="text" value={searchTerm} onChange={handleInputChange} />
            <button className='search-button' onClick={()=>{handleSearch(searchTerm)}}>Search</button>
        </div>
    );
};

export default Search;
