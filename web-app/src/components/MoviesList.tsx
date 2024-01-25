import React, {FC} from "react";
import {Movie} from "../scripts/fetchMovies";
import {useFetchMovies} from "../hooks/useFetchMovies";
import {MoviePreview} from "./MoviePreview";
import block from "bem-css-modules";

import s from './MoviesList.module.scss';
import Pagination from "./Pagination";

const b = block(s);
export const MoviesList: FC = () => {
    const {loading, movies, totalPages, currentPage, setPage} = useFetchMovies();

    if (loading) {
        return (<div>Loading...</div>)
    }

    return (<>
        <div className={b()}>
            {movies.map((movie: Movie, index: number) => (
                <MoviePreview key={index} movie={movie}/>
            ))}
        </div>
        <Pagination
            onPageChange={(page)=>{setPage(page);}}
            totalPageCount={totalPages}
            currentPage={currentPage}/>
    </>);
}
