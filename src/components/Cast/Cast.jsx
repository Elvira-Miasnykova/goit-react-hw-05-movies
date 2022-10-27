import { CastList } from "./Cast.styled";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getMovieCredits } from "services/movieApi";

const Cast = () => {
    const [movieCredits, setMovieCredits] = useState(null);
    const { movieId } = useParams();
    
    useEffect(() => {
        getMovieCredits(movieId).then(setMovieCredits)
    }, [movieId]);

    if (!movieCredits) {
        return;
    };
    console.log(movieCredits);
    
    const shortMovieCredits = movieCredits.slice(0, 5);
    return (
        <CastList>
            {shortMovieCredits.map(({name, character, profile_path}) => {
                return (
                    <li key={name}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                            alt={`${name}`}
                             height={200}
                        />
                        <p>{name}</p>
                        <p>{character}</p>
                    </li>
                );
            })}
        </CastList>
    );
};

export default Cast;