import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MoviesService {
  async getMovies(page: number = 1) {
    const config = {
      headers: { Authorization: `Bearer ${process.env.MOVIE_DB_ACCESS_KEY}` },
    };

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      config,
    );
    return data;
  }
}
