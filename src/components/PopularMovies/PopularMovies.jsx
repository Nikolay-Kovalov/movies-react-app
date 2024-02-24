import { useEffect, useState} from "react";
import styles from "./PopularMovies.module.css";
import fetchApi from '../../services/fetchApi';
import MovieCard from "./MovieCard/MovieCard";


const PopularMovies = () => {
    const[movies,setMovies] = useState([])
    useEffect(() => {
        fetchApi.fetchTrandingMovies().then(data => {
                 setMovies(data.results)

        }).catch(error => console.log(error.message)) 
    },[])
    return (
        <>     
            <ul className={styles.list}>{movies.map(movie => {
           
              return <MovieCard id={movie.id}  key={movie.id} title={movie.title} image={movie["poster_path"]} />
            } )}</ul></>
       
    )
}

export default PopularMovies;