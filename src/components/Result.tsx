import React from 'react';
import { Giphy } from '../models/GiphyModel';
import ResultsList from '../components/ResultsList';

interface Props {
    giphy: Giphy;
}
function Result(giphy: Props){

    return (
        <div className='Result'>
                    <div>
                    {giphy.giphy.title}
                    
                    <img src={giphy.giphy.images.original.url} />
                    <br />
                    <a href={giphy.giphy.url}>link to Giphy</a> 
                    </div>
        </div>
    )
}

export default Result;