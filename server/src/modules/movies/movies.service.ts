import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MoviesService {
  async getMovies() {
    const config = {
      headers: { Authorization: `Bearer ${process.env.MOVIE_DB_ACCESS_KEY}` },
    };

    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/12',
      config,
    );
    return data;
  }
}
