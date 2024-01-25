import { Command, CommandRunner } from 'nest-commander';
import { MoviesService } from './movies.service';

@Command({
  name: 'movies:import',
  options: {
    isDefault: true,
  },
})
export class MoviesCommand extends CommandRunner {
  constructor(private readonly moviesService: MoviesService) {
    super();
  }

  async run(): Promise<void> {
    await this.moviesService.importAll();
  }
}
