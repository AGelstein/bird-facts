import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdModule } from './bird/bird.module';
import { BirdController } from './bird/bird.controller';

@Module({
  imports: [BirdModule],
  controllers: [AppController, BirdController],
  providers: [AppService],
})
export class AppModule {}
