import { Box } from "Box";
import { MovieList } from "components/MovieList";

const Home = () => {
    return (
        <Box as='main' pl={3}>
            <h1>Trending today</h1>
            <MovieList />
        </Box>
    );
};

export default Home;