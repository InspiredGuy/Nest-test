import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { HumanService } from './human.service';
import { Serializer } from './model/human.serializer';
import { SerializePipe } from '../../pipes/serialize.pipe';
import { Human } from './model/human.entity';

@Controller('human')
export class HumanController {
  constructor(private readonly humanService: HumanService) {}

  @Post()
  @UsePipes(new SerializePipe('human'), new ValidationPipe())
  async create(@Body() human: Human) {
    return Serializer.serializeAsync('human', await this.humanService.create(human));
  }

  @Get()
  async findAll() {
    return Serializer.serializeAsync('human', await this.humanService.findAll());
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return Serializer.serializeAsync('human', await this.humanService.findOne(id));
  }
}
