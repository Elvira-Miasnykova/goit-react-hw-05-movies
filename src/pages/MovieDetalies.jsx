import { useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieId } from "services/movieApi";
import { Box } from "Box";
import { Link } from "react-router-dom";

export const MovieDetalies = () => {
    const [movieDetalies, setMovieDetalies] = useState(null);
    const {movieId} = useParams();
    const location = useLocation();
    
    useEffect(() => {
        getMovieId(movieId).then(setMovieDetalies)
    }, [movieId]);

    if (!movieDetalies) {
        return;
    };

    const {
    poster_path,
    original_title,
    vote_average,
    overview,
    release_date,
    genres,
  } = movieDetalies;

  const genreList = genres.map((genre) => genre.name).join(' ');
  
  const slicedDate = release_date.split('').slice(0, 4).join('');
  let movieReleaseDate = `(${slicedDate})`;
  if (release_date === '') {
    return movieReleaseDate = 'Unknown';
  }
    return (
      <main>
        <Link
        to={location.pathname.includes('movies')
            ? `${location.state.from.pathname}${location.state.from.search}`
            : '/home'
        }
      >
        Back
      </Link>
            <Box display="flex" gridGap="20px" mt={3} mb={3} p={0}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${original_title}`}
          height={600}
        />
        <Box>
          <Box as="h2" mb={3}>
            {original_title} {movieReleaseDate}
          </Box>
          <Box as="p" mb={3}>
            User score: <span>{Math.round(vote_average * 10)}%</span>
          </Box>
          <Box as="h3" mb={3}>
            Overview
          </Box>
          <Box as="p" mb={3}>
            {overview}
          </Box>
          <Box as="p" mb={3}>
            Genres
          </Box>
            <p>{genreList}</p>
          </Box>
      </Box>

      <p>Additional information</p>
      <Box as="ul" p={0} m={0} mt={3}>
        <li>
            <Link to="cast" state={{ from: location.state?.from ?? '' }}> 
            Cast
          </Link>
        </li>
         <li>
          <Link to="reviews" state={{ from: location.state?.from ?? '' }}>
            Reviews
          </Link>
        </li> 
      </Box>
      <Outlet />
    
        </main>
    );
};