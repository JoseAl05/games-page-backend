import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError } from 'rxjs';
import { GameProps } from '../interfaces/game.interface';

@Injectable()
export class GamesService {
  constructor(private readonly httpService: HttpService) {}
  /* POSSIBLE PARAMETERS */
  /*
    search:string,
    page:number,
    page_size:number,
    search_precise:string,
    platforms:string,
    stores:string,
    genres:string,
    tags:string,
    ordering:string
  */

  async findAll(params: {
    search?: string;
    page_size: number;
    page: number;
    platform?: string;
    stores?: string;
    genre?: string;
    tags?: string;
    ordering?: string;
  }): Promise<GameProps[]> {
    const url = new URL(
      `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`,
    );
    if (params.search?.length !== 0) {
      url.searchParams.append('search', params.search);
    }
    if (params.page_size) {
      url.searchParams.append('page_size', params.page_size.toString());
    } else {
      url.searchParams.append('page_size', '10');
    }
    if (params.page) {
      url.searchParams.append('page', params.page.toString());
    } else {
      url.searchParams.append('page', '1');
    }
    if (params.platform?.length !== 0) {
      url.searchParams.append('platforms', params.platform);
    }
    if (params.stores) {
      url.searchParams.append('stores', params.stores);
    }
    if (params.genre?.length !== 0) {
      url.searchParams.append('genres', params.genre);
    }
    if (params.tags) {
      url.searchParams.append('tags', params.tags);
    }
    if (params.ordering) {
      url.searchParams.append('ordering', params.ordering);
    }
    console.log(url);
    const response = await this.httpService.axiosRef
      .get<GameProps[]>(url.toString())
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
