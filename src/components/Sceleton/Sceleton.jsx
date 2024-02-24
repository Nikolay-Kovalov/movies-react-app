import styles from "./Sceleton.module.css";

const Sceleton = (props) => {
    const { text } = props;
    return (
        <div className={styles.sceleton}>
            <span className={styles.sceleton_text}>{text}</span>
        </div>
    )
}

export default Sceleton;