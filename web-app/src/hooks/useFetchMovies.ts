import {useEffect, useState} from "react";
import {fetchMovies, selectError, selectLoading, selectMovies, selectTotalPages} from "../scripts/fetchMovies";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../app/store";

export const useFetchMovies = () => {
    const dispatch = useDispatch<AppDispatch>()
    const movies = useSelector(selectMovies)
    const totalPages = useSelector(selectTotalPages)
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        dispatch(fetchMovies({page}))
    }, [dispatch, page])

    return {
        loading,
        movies,
        error,
        totalPages,
        currentPage: page,
        setPage
    }
}
