import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

interface RequestParams {
    page: number|string;
}

interface MoviesState {
    movies: Movie[]
    totalPages: number;
    loading: boolean
    error: string | null
}

export const fetchMovies = createAsyncThunk('movies/fetch', async (params: RequestParams) => {
    const {page} = params;
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/movies/${page}`);

    return data;
});

const initialState: MoviesState = {
    movies: [],
    totalPages: 0,
    loading: false,
    error: null,
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchMovies.pending, state => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false
                state.movies = action.payload.results
                state.totalPages = action.payload.total_pages;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Something went wrong'
            })
    },
})

export const moviesReducer = moviesSlice.reducer;

export const selectMovies = (state: RootState) => state.movies.movies
export const selectTotalPages = (state: RootState) => state.movies.totalPages
export const selectLoading = (state: RootState) => state.movies.loading
export const selectError = (state: RootState) => state.movies.error
