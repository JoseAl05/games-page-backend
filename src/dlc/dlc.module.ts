import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DlcController } from './controllers/dlc.controller';
import { DlcService } from './services/dlc.service';

@Module({
  imports: [HttpModule],
  providers: [DlcService],
  controllers: [DlcController],
})
export class DlcModule {}
