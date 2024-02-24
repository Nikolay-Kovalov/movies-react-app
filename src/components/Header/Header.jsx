import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink className={({isActive})=> isActive ? styles.link + " " + styles.active : styles.link} to="/">Home</NavLink>
            <NavLink className={({isActive})=> isActive ? styles.link + " " + styles.active : styles.link}to="/movies">Movies</NavLink>
        </header>
    )
}

export default Header;