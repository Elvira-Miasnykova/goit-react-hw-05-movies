import axios from "axios";

const API_KEY = 'e01db9b804ffe45f7f254299d10104d4';

export const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        try {
            const response = await axios.get(url);
            //console.log(response);
            return response.data.results;
        } catch (error) {
            console.log(error);
            
        }
    };

export const getMovieId = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
        try {
            const response = await axios.get(url);
            //console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            
        }
};
    
export const getMovieCredits = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    try {
        const response = await axios.get(url);
        console.log(response);
        return response.data.cast;
    } catch (error) {
        console.log(error);
    }
};

export const getMovieReview = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    try {
        const response = await axios.get(url);
        return response.data.results;
    } catch (error) {
        console.log(error);
    }
};

export const getSearchMovie = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};