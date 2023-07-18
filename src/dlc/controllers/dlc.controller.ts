import { Controller, Param, Get } from '@nestjs/common';
import { DlcService } from '../services/dlc.service';

@Controller('dlc')
export class DlcController {
  constructor(private readonly dlcService: DlcService) {}

  @Get(':gameId')
  getGameDLC(@Param('gameId') gameId: string): Promise<any> {
    return this.dlcService.findGamesDLC(gameId);
  }
}
