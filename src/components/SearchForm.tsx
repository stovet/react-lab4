import React, { FormEvent, useState } from 'react';
import './SearchForm.css';

interface Props {
    onSubmit: (search: string) => void;
}

function SearchForm({onSubmit}: Props) {

    const [searchTerm, setSearchTerm] = useState("");

function handleFormSubmit(e:FormEvent){
    e.preventDefault();
    
    onSubmit(searchTerm)
}

    return (
        <div className="SearchForm">
            <form onSubmit={handleFormSubmit}>
                <div className='searchBarContainer'>
                    <label htmlFor="gifSearch">Search for a Gif</label>
                    <div className='inputDiv'> 
                        <input type="text" name="gifSearch" id="gifSearch" onChange={e => setSearchTerm(e.target.value)}/>
                        <button type='submit'>Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;