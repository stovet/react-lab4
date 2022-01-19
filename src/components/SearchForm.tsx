import React, { FormEvent, useState } from 'react';

interface Props {
    onSubmit: (search: string) => void;
}

function SearchForm({onSubmit}: Props) {

    const [searchTerm, setSearchTerm] = useState("");

function handleFormSubmit(e:FormEvent){
    e.preventDefault();
    
    // if (searchTerm === ""){

   // }

   // console.log(searchTerm);
    onSubmit(searchTerm)
}

    return (
        <div className="SearchForm">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="gifSearch">Search for a Gif</label>
                <input type="text" name="gifSearch" id="gifSearch" onChange={e => setSearchTerm(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;