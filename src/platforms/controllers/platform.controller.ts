import { Controller, Get } from '@nestjs/common';
import { PlatformService } from '../services/platform.service';

@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Get()
  getAllGenres(): Promise<any> {
    return this.platformService.findAllPlatforms();
  }
}
