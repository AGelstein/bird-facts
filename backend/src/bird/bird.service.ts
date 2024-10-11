import { Injectable } from '@nestjs/common';
import { Bird } from './entities/bird.entity';

@Injectable()
export class BirdService {
  private readonly birds: Bird[] = [];

  create(bird: Bird) {
    this.birds.push(bird);
  }

  findAll(): Bird[] {
    return this.birds;
  }

}
