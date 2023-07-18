import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GameDetailsService {
  constructor(private readonly httpService: HttpService) {}

  async findDetailsByGame(gameId: string) {
    if (gameId) {
      const url = new URL(
        `https://api.rawg.io/api/games/${gameId}?key=${process.env.RAWG_API_KEY}`,
      );
      console.log(url);
      return;
    }
  }
}
