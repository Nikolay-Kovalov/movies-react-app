
import { useEffect, useState } from "react";
import Movie from "../components/Movie/Movie";
import { useParams } from "react-router-dom";
import fetchApi from "../services/fetchApi";

const MovieDetails = () => {
    const[movieInfo, setMovieInfo] = useState({})
    // const[id, setId] = useState(null)
    const { movieId} = useParams();

  
    useEffect(() => {
        fetchApi.fetchMovieDetails(movieId).then(data => {
            setMovieInfo(data)
        } 
    )
    }, [movieId])
    
    return (
        <div >
            <Movie genreText={movieInfo?.genres?.map(genre => genre.name).join(', ')}
                image={movieInfo["poster_path"]}
                tagline={`"${movieInfo.tagline}"`}
                runtime={`${movieInfo.runtime} min`}
                title={movieInfo.title}
                score={`${parseInt(movieInfo.popularity)}`}
                overviewText={movieInfo.overview}
     
            />
        </div>
    )
}

export default MovieDetails;