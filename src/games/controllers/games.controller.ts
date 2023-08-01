import { Controller, Get, Query } from '@nestjs/common';
import { GamesService } from '../services/games.service';
import { GameProps } from '../interfaces/game.interface';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getAllGames(@Query() params: any): Promise<GameProps[]> {
    return this.gamesService.findAll(params);
  }
}
