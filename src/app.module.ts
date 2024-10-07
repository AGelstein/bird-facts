import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdModule } from './bird/bird.module';

@Module({
  imports: [BirdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
