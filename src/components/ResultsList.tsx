import React from 'react';
import { Giphy, GiphyResponse } from '../models/GiphyModel';

interface Props {
    giphy: Giphy[];
}


function ResultsList({giphy}: Props ){

    return (
        <div className="ResultsList">
            <p>Results</p>
            <ul>
            {
                giphy.map((giph, i) => 
                    <li key={i} >
                        {giph.title}
                        <p></p>
                        <img src={giph.images.original.url} />
                        <a href={giph.url}>link</a> 
                    </li>
                )}
                </ul>
        </div>
    )
}

export default ResultsList;