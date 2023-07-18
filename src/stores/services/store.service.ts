import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StoreService {
  constructor(private readonly httpService: HttpService) {}

  async findStores(gameId: string): Promise<any> {
    if (gameId) {
      const url = new URL(
        `https://api.rawg.io/api/games/${gameId}/stores?key=${process.env.RAWG_API_KEY}`,
      );
      console.log(url);
      return;
    }
  }
}
