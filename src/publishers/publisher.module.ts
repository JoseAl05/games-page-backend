import { Module } from '@nestjs/common';
import { PublisherController } from './controllers/publisher.controller';
import { PublisherService } from './services/publisher.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}
