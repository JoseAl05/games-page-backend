import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScreenshotService {
  constructor(private readonly httpService: HttpService) {}

  async findGamesScreenshots(gameId: string) {
    if (gameId) {
      const url = new URL(
        `https://api.rawg.io/api/games/${gameId}/screenshots?key=${process.env.RAWG_API_KEY}`,
      );
      console.log(url);
      return;
    }
  }
}
