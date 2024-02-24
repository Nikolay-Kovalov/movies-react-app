import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./Movie.module.css"


const Movie = ({ title, score, overviewText, genreText, image, runtime, tagline }) => {
    const location = useLocation();

    return (
        <div className={styles.main_wrapper}>
    <Link to={location.state?.from || '/'} className={styles.go_back_link}>Go back</Link>
        <div className={styles.wrapper}>
            <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" />
            <div className={styles.movie_info}>
                    <h1 className={styles.movie_title}>{title}</h1>
                    <h2 className={styles.tagline}>{tagline}</h2>
                <p className={styles.score}><span className={styles.span}>User score:</span>{score}</p>
                <h2 className={styles.overview}>Overview:</h2>
                <p className={styles.overview_text}>{overviewText}</p>
                <h2 className={styles.genre}>Genres:</h2>
                    <p className={styles.genre_text}>{genreText}</p>
                    <h2 className={styles.runtime}>{runtime}</h2>
            </div>
            <h3 className={styles.add_title}>Additional information:</h3>
            </div>
              {/* <h3 className={styles.add_info_title}>Additional information:</h3> */}
            <ul className={styles.add_list}>
                <li className={styles.item}>
                    <Link to="cast" className={styles.add_link}>Cast</Link>
                </li>
                 <li className={styles.item}>
                    <Link to="reviews"  className={styles.add_link}>Reviews</Link>
                </li>
            </ul>
            <Outlet/>
            </div>
    )
}

export default Movie;