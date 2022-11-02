import { Box } from 'Box';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/movieApi';

export const Movies = () => {
    
    const [movieList, setmovieList] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const [inputSearch, setInputSearch] = useState(query);
    const location = useLocation();
    
    
      useEffect(() => {
    if (query.trim() === '') {
      return;
    }
       // setSearchParams({ query });
    
    getSearchMovie(query).then(setmovieList);
  }, [query, setSearchParams]);


  const handleChange = e => {
    setInputSearch(e.target.value);
  };
    const handleSubmit = e => {
       e.target.reset();
    e.preventDefault();
    
      setSearchParams({ query: e.target.query.value });
     
  };

  return (
    <Box>
      <Box as="form" pl={3} onSubmit={handleSubmit}>
              <input type="text"
                name="query"
                onChange={handleChange}
                autoComplete="off"
                value={inputSearch}
                autoFocus
                placeholder="Enter a movie name"
            
              />
        <button type="submit">Search</button>
      </Box>
      <>
      {movieList && (
        <Box as="ul" pl={3}>
          {movieList.map(({ id, title }) => {
            return (
              <li key={id}>
                    <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </Box>
      )}
    </>
    </Box>
  );
};