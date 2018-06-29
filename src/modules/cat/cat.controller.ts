import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatService } from './cat.service';
import { Serializer } from './model/cat.serializer';
import { SerializePipe } from '../../pipes/serialize.pipe';
import { Cat } from './model/cat.entity';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @UsePipes(new SerializePipe('cat'), new ValidationPipe())
  async create(@Body() cat: Cat) {
    return Serializer.serializeAsync('cat', await this.catService.create(cat));
  }

  @Get()
  async findAll() {
    return Serializer.serializeAsync('cat', await this.catService.findAll());
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return Serializer.serializeAsync('cat', await this.catService.findOne(id));
  }
}
