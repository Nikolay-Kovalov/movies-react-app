import styles from "./Reviews.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchApi from "../../services/fetchApi";

const Reviews = () => {
  const { movieId } = useParams();
    const [ reviews, setReviews ] = useState([]);

    useEffect(() => {
        fetchApi.fetchMovieReviews(movieId)
            .then(data => {
                console.log(data.results)
              return  setReviews(data.results)
                // setCast(data.cast)
            }) 
    
    },[movieId, setReviews])
    return (<>
        <h1 className={styles.title}>Reviews</h1>
        <ul className={styles.reviews_list}>{reviews?.map(review => {
            return <li className={styles.item} key={review.id}>
                <div className={styles.wrapper}>
                <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${review['author_details']['avatar_path']}`} alt="" />
                    <p className={styles.text}>{review.author}</p>
                    </div>
                <p className={styles.review}>{review.content}</p>
            </li >
        })}</ul>
    </>
    )
}


export default Reviews;