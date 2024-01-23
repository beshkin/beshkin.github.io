import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get(':page?')
  getMovies(@Param('page') page: number = 1) {
    return this.moviesService.getMovies(page);
  }
}
