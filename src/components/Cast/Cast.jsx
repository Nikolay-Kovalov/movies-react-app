import { useParams } from "react-router-dom";
import styles from "./Cast.module.css";
import { useEffect, useState } from "react";
import fetchApi from "../../services/fetchApi";
import Sceleton from "../Sceleton/Sceleton";

const Cast = () => {
    const { movieId } = useParams();
    const [ cast, setCast ] = useState([]);

    useEffect(() => {
        fetchApi.fetchMovieActors(movieId)
            .then(data => {
                console.log(data.cast)
              return  setCast(data.cast)
                // setCast(data.cast)
            }) 
    
    },[movieId, setCast])
    return (<>
        <h1 className={styles.title}>Cast</h1>
        <ul className={styles.cast_list}>{cast?.map(actor => {
            console.log(actor['profile_path'])
            return <li key={actor.name}>
                {actor['profile_path'] ? <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${actor['profile_path']}`} alt="" /> : <Sceleton text="No photo"/>}
                <p className={styles.text}>{actor.name}</p>
                <p className={styles.text}>as {`"${actor.character}"`}</p>
            </li >
        })}</ul></>
    )
}

export default Cast;