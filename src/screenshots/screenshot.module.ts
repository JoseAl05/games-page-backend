import { Module } from '@nestjs/common';
import { ScreenshotService } from './services/screenshot.service';
import { HttpModule } from '@nestjs/axios';
import { ScreenshotController } from './controllers/screenshot.controller';

@Module({
  imports: [HttpModule],
  providers: [ScreenshotService],
  controllers: [ScreenshotController],
})
export class ScreenshotModule {}
