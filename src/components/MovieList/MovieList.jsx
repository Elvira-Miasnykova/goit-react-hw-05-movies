import { Box } from "Box";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "services/movieApi";

export const MovieList = () => {
    const [ movieList, setMovieList ] = useState(null);

    useEffect(() => {
        getMovies().then(setMovieList);
    }, []);


    return (
        <>
            {movieList && (
                <Box as='ul' m={0} pl={3}>
                {movieList.map(({ id, title }) => {
                    return (
                    <li key={id}>
                        <Link to={`${id}`}>{title}</Link>
                    </li>
                    )
                }
                )
                }
            </Box>
            )}
        </>
    );
};