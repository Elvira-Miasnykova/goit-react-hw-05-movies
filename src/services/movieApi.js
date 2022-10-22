import axios from "axios";

export const getMovies = async () => {
    const API_KEY = 'e01db9b804ffe45f7f254299d10104d4';
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
        try {
            const response = await axios.get(url);
            console.log(response);
            return response.data.results;
        } catch (error) {
            console.log(error);
            
        }
    };