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
    platforms?: string;
    stores?: string;
    genres?: string;
    tags?: string;
    ordering?: string;
  }): Promise<GameProps[]> {
    const url = new URL(
      `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`,
    );
    if (params.search) {
      url.searchParams.append('search', params.search);
    }
    if (params.page_size) {
      url.searchParams.append('page_size', params.page_size.toString());
    }
    if (params.platforms) {
      url.searchParams.append('platforms', params.platforms);
    }
    if (params.stores) {
      url.searchParams.append('stores', params.stores);
    }
    if (params.genres) {
      url.searchParams.append('genres', params.genres);
    }
    if (params.tags) {
      url.searchParams.append('tags', params.tags);
    }
    if (params.ordering) {
      url.searchParams.append('ordering', params.ordering);
    }
    console.log(url);
    return;
    // const response = await this.httpService.axiosRef
    //   .get<GameProps[]>(
    //     `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&page_size=10&search=${search}`,
    //   )
    //   .then((res) => {
    //     catchError((err) => {
    //       throw new Error(err.message);
    //     });

    //     if (res.status === 200) {
    //       return res.data;
    //     }

    //     throw new Error(`Error: ${res.statusText}`);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     throw new Error(`Error: ${err.message}`);
    //   });

    // return response;
  }
}
