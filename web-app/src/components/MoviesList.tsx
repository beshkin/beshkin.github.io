import React, {FC} from "react";
import {Movie} from "../scripts/fetchMovies";
import {MoviePreview} from "./MoviePreview";
import block from "bem-css-modules";
import Pagination from "./Pagination";
import {DebouncedInput} from "./DebouncedInput";

import s from './MoviesList.module.scss';
import {useFetchMovies} from "../hooks/useFetchMovies";

const b = block(s);
export const MoviesList: FC = () => {
    const {movies, totalPages, currentPage, setPage, search, setSearch,} = useFetchMovies();

    return (<>
        <div>
            <DebouncedInput id={'search'} name={'debounced-search'} placeholder={'Search...'} callback={callSearch}/>
        </div>
            <div className={b()}>
                {movies.map((movie: Movie, index: number) => (
                    <MoviePreview key={index} movie={movie}/>
                ))}
            </div>
            <Pagination
                onPageChange={(page) => {
                    setPage(page);
                }}
                totalPageCount={totalPages}
                currentPage={currentPage}/>
    </>);

    function callSearch(value: string) {
        if (value !== search) {
            setPage(1);
        }
        setSearch(value);
    }
}
