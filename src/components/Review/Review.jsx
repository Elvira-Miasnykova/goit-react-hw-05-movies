import { Box } from "Box";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getMovieReview } from "services/movieApi";

const Review = () => {
    const [movieReview, setMovieReview] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReview(movieId).then(setMovieReview)
    }, [movieId]);

    if (!movieReview) {
        return;
    };

    console.log(movieReview);

    return (
        <>
            {movieReview.length !== 0 ? (
                <div>
                    {movieReview.map(({ author, content, id }) => {
                        return (
                            <Box as="li" mb={3} key={id}>
                                <b>Author: {author}</b>
                                <p>{content}</p>
                            </Box>
                        )
                    }
                    )
                    }
                </div>
            ) : (<h3>There is no review</h3>)
            }
        </>
    )
};

export default Review;