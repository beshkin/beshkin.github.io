import {useEffect, useState} from "react";
import {fetchMovies} from "../scripts/fetchMovies";

export const useFetchMovies = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchMovies(page).then(response => {
            const {results, total_pages} = response;
            setMovies(results);
            setTotalPages(total_pages);
            setLoading(false);
        }).catch(error => {
            setLoading(false);
            console.log(error)
        });
    }, [page])

    return {
        loading,
        movies,
        totalPages,
        setPage
    }
}
