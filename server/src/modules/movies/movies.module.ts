import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { MoviesCommand } from './movies.command';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MoviesService, MoviesCommand],
  controllers: [MoviesController],
})
export class MoviesModule {}
