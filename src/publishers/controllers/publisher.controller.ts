import { Controller, Get } from '@nestjs/common';
import { PublisherService } from '../services/publisher.service';

@Controller('publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  getAllPublishers(): Promise<any> {
    return this.publisherService.findAllPublishers();
  }
}
