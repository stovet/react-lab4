import axios from 'axios';
import { Giphy } from '../models/GiphyModel';


export function fetchTrendingGiphy(): Promise<Giphy[]> {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY || "";
    
    return axios.get('https://api.giphy.com/v1/gifs/trending', {
        params: {
            api_key: apiKey
        }
    })
    .then(res => res.data.data);
}

export function fetchGiphy(query: string): Promise<Giphy[]> {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY || "";
    console.log(query);
    return axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: query,
            api_key: apiKey
        }
    })
    .then(res => res.data.data);
}

