import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

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

  async getMoviesDb(page: number = 1, keyword: string = '') {
    const take = 4;
    const skip = take * (page - 1);

    const [result, total] = await this.moviesRepository.findAndCount({
      where: { title: Like('%' + keyword + '%') },
      take: take,
      skip: skip,
    });

    return {
      results: [...result],
      total_pages: Math.ceil(total / take),
    };
  }

  @Cron(CronExpression.EVERY_DAY_AT_11PM)
  async importAll() {
    const savedMovies = await this.findAll();

    for (let page = 1; page <= 10; page++) {
      const { results } = await this.getMovies(page);
      for (const obj of results) {
        const { id: external_id, title, overview, poster_path } = obj;
        const movie: Movie = {
          external_id,
          title,
          image: poster_path,
          overview,
        };
        if (
          !savedMovies.some(
            (savedMovie) => savedMovie.external_id === external_id,
          )
        ) {
          await this.save(movie);
        }
      }
    }
  }

  findAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  findById(id: number): Promise<Movie> {
    return this.moviesRepository.findOneBy({ id });
  }

  findAllByTitle(title: string): Promise<Movie[]> {
    return this.moviesRepository.findBy({ title });
  }

  save(movie: Movie) {
    return this.moviesRepository.save(movie);
  }
}
