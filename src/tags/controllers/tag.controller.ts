import { Controller, Get } from '@nestjs/common';
import { TagService } from '../services/tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  getAllGenres(): Promise<any> {
    return this.tagService.findAllTags();
  }
}
