// import { useState} from "react";
import React, { useEffect } from "react";
import styles from "./MovieSearchForm.module.css";
import { useSearchParams } from "react-router-dom";

const SearchForm = (props) => {
    // const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || "";
    const ref = React.createRef();

    const handleInputChange = ({target: {value}}) => {
        // setSearchQuery(value);
           setSearchParams({ post: value })
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        // props.getSearchQuery(searchQuery)
             props.getSearchQuery(postQuery)
        

        // const query = evt.target.search.value;

        // console.log(postQuery)

    }

    useEffect(() => {
    ref.current.value = postQuery

    }, [postQuery,ref])
    return (
        <form onSubmit={handleFormSubmit} className={styles.form}>
            <input ref={ref} onChange={handleInputChange} value={postQuery} name="search" type="text" className={styles.input} />
            <button type="submit" className={styles.button}>Search</button>
        </form>
    )
}

export default SearchForm;