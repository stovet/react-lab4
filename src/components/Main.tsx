import React, {useEffect, useState} from 'react';
import SearchForm from '../components/SearchForm';
import ResultsList from '../components/ResultsList';
import { Giphy } from '../models/GiphyModel';
import { fetchGiphy, fetchTrendingGiphy } from '../services/GiphyApiService';
import Result from './Result';

function Main(){
    const [giphys, setGiphys] = useState<Giphy[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    // useEffect(()=> {
    //     fetchTrendingGiphy().then(
    //         giphys => setGiphys(giphys)
    //     );
    // }, []);

    // useEffect(() => {
    //     fetchGiphy(searchTerm).then(
    //     giphys => setGiphys(giphys)
    // );
    // }, []);
    useEffect(()=> {
        searchTerm ?
        fetchGiphy(searchTerm).then(
            giphys => setGiphys(giphys)):
        fetchTrendingGiphy().then(
            giphys => setGiphys(giphys)   
        );
    }, [searchTerm]);


function handleSubmit(term: string){
    console.log(term);
    setSearchTerm(term)
}

    return (
        <div className="Main">
          <SearchForm  onSubmit={handleSubmit}/>    
            <ResultsList giphy={giphys}/>
            <Result  search={searchTerm}/>
        </div>
    )
}
export default Main;