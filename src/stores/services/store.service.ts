import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError } from 'rxjs';

@Injectable()
export class StoreService {
  constructor(private readonly httpService: HttpService) {}

  async findStores(gameId: string): Promise<any> {
    if (gameId) {
      const url = new URL(
        `https://api.rawg.io/api/games/${gameId}/stores?key=${process.env.RAWG_API_KEY}`,
      );
      const response = await this.httpService.axiosRef
        .get<any>(url.toString())
        .then((res) => {
          catchError((err) => {
            throw new Error(err.message);
          });
          if (res.status === 200) {
            return res.data;
          }
          throw new Error(`Error: ${res.statusText}`);
        });
      return response;
    }
  }
}
