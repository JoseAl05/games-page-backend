import { Module } from '@nestjs/common';
import { PlatformController } from './controllers/platform.controller';
import { PlatformService } from './services/platform.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PlatformController],
  providers: [PlatformService],
})
export class PlatformModule {}
