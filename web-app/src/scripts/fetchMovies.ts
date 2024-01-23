import axios from "axios";

export const fetchMovies = async (page: number = 1) => {
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/movies/${page}`);

    return data;
}
