import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MoviesService } from './modules/movies/movies.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly moviesService: MoviesService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/movies')
  getMovies() {
    return this.moviesService.getMovies();
  }
}
