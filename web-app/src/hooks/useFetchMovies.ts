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
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        dispatch(fetchMovies({page, search}));
    },[dispatch, page, search])

    return {
        loading,
        movies,
        search,
        error,
        totalPages,
        currentPage: page,
        setPage,
        setSearch
    }
}
