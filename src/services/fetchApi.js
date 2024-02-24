const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjM0ZGIxMWMxNjIwMTE1OTBkMTRhMzA4MDg0OGVkNiIsInN1YiI6IjYzYTNmZDQ0OTNkYjkyMDBmNDkxMGI0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LY_G36csxfyqSH7UhTlCGcx28IJPAx126r45DdOJrQ0";
const headers = {
    Authorization: `Bearer ${API_KEY}`,
    accept: 'application/json'
}

const fetchApi = {
    fetchTrandingMovies: async function () {
        return await fetch(`${BASE_URL}/trending/movie/week`, {headers})
            .then(response => {
                if (!response.ok) {
                throw new Error('Something went wrong')
                }
                return response.json();
        })
    },
    searchMovies: function (movie) {
        return fetch(`${BASE_URL}/search/movie?query=${movie}`, {headers})
            .then(response => {
                if (!response.ok) {
                throw new Error("Something went wrong")
                }
                return response.json();
        })
    },
    fetchMovieDetails: function (id) {
        return fetch(`${BASE_URL}/movie/${id}`, { headers })
            .then(response => {
                if (!response.ok) {
                throw new Error('Something went wrong')
                }
                return response.json();
        })
    },
    fetchMovieActors: function (id) {
        return fetch(`${BASE_URL}/movie/${id}/credits`, { headers })
            .then(response => {
                if (!response.ok) {
                throw new Error("Something went wrong")
                }
                return response.json();
        } )
    },
    fetchMovieReviews: function (id) {
        return fetch(`${BASE_URL}/movie/${id}/reviews`, { headers })
            .then(response => {
                if (!response.ok) {
                throw new Error("Something went wrong")
                }
                return response.json();
        })
    }
}

export default fetchApi;

