import styles from "./MovieSearchList.module.css";
import SearchForm from "./MovieSearchForm.jsx/MovieSearchForm";
import { useState, useEffect } from "react";
import MovieCard from "../PopularMovies/MovieCard/MovieCard";
import fetchApi from "../../services/fetchApi";
import { useSearchParams } from "react-router-dom";

const MovieSearchList = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([])
    const [searcQuery, setSearchQuery] = useState(searchParams.get('post') || "");



    const getSearchQuery = (query) => {
    setSearchQuery(query)
    }
    useEffect(() => {
        fetchApi.searchMovies(searcQuery).then(data => {
                 setMovies(data.results)

        }).catch(error => console.log(error.message)) 
    },[searcQuery])
    return (
        <>
               <SearchForm getSearchQuery={getSearchQuery}/>
        <ul className={styles.list}>{movies.map(movie => {
            return <MovieCard
                // getMovieId={getMovieId}
                id={movie.id} key={movie.id} title={movie.title} image={movie["poster_path"]} />
            } )}</ul>  
            </>
    )
} 

export default MovieSearchList;