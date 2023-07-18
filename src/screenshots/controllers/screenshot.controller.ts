import { Controller, Param, Get } from '@nestjs/common';
import { ScreenshotService } from '../services/screenshot.service';

@Controller('screenshot')
export class ScreenshotController {
  constructor(private readonly screenshotService: ScreenshotService) {}

  @Get(':gameId')
  getGameScreenshots(@Param('gameId') gameId: string): Promise<any> {
    return this.screenshotService.findGamesScreenshots(gameId);
  }
}
