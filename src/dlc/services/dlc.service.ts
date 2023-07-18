import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError } from 'rxjs';

@Injectable()
export class DlcService {
  constructor(private readonly httpService: HttpService) {}

  async findGamesDLC(gameId: string) {
    if (gameId) {
      const url = new URL(
        `https://api.rawg.io/api/games/${gameId}/additions?key=${process.env.RAWG_API_KEY}`,
      );
      console.log(url);
      return;
    }
  }
}
