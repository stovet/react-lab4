import React from 'react';
import { Giphy, GiphyResponse } from '../models/GiphyModel';
import Result from './Result';

interface Props {
    giphy: Giphy[];
}


function ResultsList({giphy}: Props ){

    return (
        <div className="ResultsList">
            <p>Results</p>
            <div className='resultsContainer'>
            
            {
                giphy.map((giph, i) => 
                <Result key={i} giphy={giph}/>
                )}  
                </div>
        </div>
    )
}

export default ResultsList;