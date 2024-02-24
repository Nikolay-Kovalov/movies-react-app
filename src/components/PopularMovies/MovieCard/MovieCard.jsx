import { Link, useLocation } from "react-router-dom";
import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
    const location = useLocation();
    const { title, image, id } = props;
    
    return (
        <li  className={styles.card}>
            <Link state={{ from: location }} to={`/movies/${id}`} className={styles.link}>
                <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" />
                         <h3 className={styles.title}>{title}</h3>
            </Link>
        </li>
    )
}

export default MovieCard;