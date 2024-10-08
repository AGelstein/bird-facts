import { Controller, Post, Get, Body } from '@nestjs/common';
import { BirdService } from './bird.service';
import { Bird } from './entities/bird.entity';
import { CreateBirdDto } from './dto/create-bird.dto';

@Controller('bird')
export class BirdController {
  constructor(private readonly birdService: BirdService) {}
  
  @Post()
  async create(@Body() createBirdDto: CreateBirdDto) {
    this.birdService.create(createBirdDto);
  }

  @Get()
  async findAll(): Promise<Bird[]> {
    return this.birdService.findAll();
  }

}
