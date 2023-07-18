import { Controller, Get, Param } from '@nestjs/common';
import { StoreService } from '../services/store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get(':gameId')
  getStoresByGame(@Param('gameId') gameId: string): Promise<any> {
    return this.storeService.findStores(gameId);
  }
}
