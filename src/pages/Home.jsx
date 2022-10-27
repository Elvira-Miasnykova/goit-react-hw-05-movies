import { Box } from "Box";
import { MovieList } from "components/MovieList";

const Home = () => {
    return (
        <Box as='main'>
            <h1>Trending today</h1>
            <MovieList />
        </Box>
    );
};

export default Home;