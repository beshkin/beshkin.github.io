import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get(':page?')
  getMovies(@Param('page') page: number = 1) {
    return this.moviesService.getMoviesDb(page);
  }

  @Post(':page?')
  searchMovies(
    @Param('page') page: number = 1,
    @Body() data: { search: string },
  ) {
    const { search } = data;
    return this.moviesService.getMoviesDb(page, search);
  }
}
