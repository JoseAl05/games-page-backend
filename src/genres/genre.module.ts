import { Module } from '@nestjs/common';
import { GenreController } from './controllers/genre.controller';
import { GenreService } from './services/genre.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [GenreController],
  providers: [GenreService],
})
export class GenreModule {}
