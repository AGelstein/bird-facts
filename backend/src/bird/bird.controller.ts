import { Controller, Post, Get, Body } from '@nestjs/common';
import { BirdService } from './bird.service';
import { Bird } from './entities/bird.entity';
import { CreateBirdDto } from './dto/create-bird.dto';
import { v4 as uuidv4 } from 'uuid';

@Controller('bird')
export class BirdController {
  constructor(private readonly birdService: BirdService) {}
  
  @Post()
  async create(@Body() createBirdDto: CreateBirdDto) {

    const bird: Bird = {
      id: uuidv4(),
      name: createBirdDto.name,
      color: createBirdDto.color,
      breed: createBirdDto.breed,
      age: createBirdDto.age,
    };
    
    this.birdService.create(bird);
  }

  @Get()
  async findAll(): Promise<Bird[]> {
    return this.birdService.findAll();
  }

}
