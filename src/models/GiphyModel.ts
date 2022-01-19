export interface GiphyResponse {
    data: Giphy[]; 
}

export interface Giphy {
    url: string;
    title: string;
    images: Images;
}

export interface Images {
    original: OriginalImage;
}

export interface OriginalImage {
    url: string;
}