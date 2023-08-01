import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GamesModule } from './games/games.module';
import { DlcModule } from './dlc/dlc.module';
import { ScreenshotModule } from './screenshots/screenshot.module';
import { StoreModule } from './stores/store.module';
import { GameDetailsModule } from './game-details/game-details.module';
import { GenreModule } from './genres/genre.module';
import { PlatformModule } from './platforms/platform.module';
import { PublisherModule } from './publishers/publisher.module';
import { TagModule } from './tags/tag.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GamesModule,
    DlcModule,
    ScreenshotModule,
    StoreModule,
    GameDetailsModule,
    GenreModule,
    PlatformModule,
    PublisherModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
