import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdModule } from './bird/bird.module';
import { BirdController } from './bird/bird.controller';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [BirdModule, UsersModule, DatabaseModule],
  controllers: [AppController, BirdController],
  providers: [AppService],
})
export class AppModule {}
