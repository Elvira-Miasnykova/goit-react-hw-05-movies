import { Box } from "Box";
import { MovieList } from "components/MovieList";

export const Home = () => {
    return (
        <Box as='main'>
            <h1>Trending today</h1>
            <MovieList/>
      </Box>  
    );
}