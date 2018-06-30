import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatService } from './cat.service';
import { Serializer } from './model/cat.serializer';
import { SerializePipe } from '../../pipes/serialize.pipe';
import { Cat } from './model/cat.entity';
import { AccessControlGuard } from '../../guards/access-control/access-control.guard';
import { Roles } from '../../decorators/roles/roles.decorator';

@Controller('cat')
@UseGuards(AccessControlGuard)
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @Roles('user', 'admin')
  @UsePipes(new SerializePipe('cat'), new ValidationPipe())
  async create(@Body() cat: Cat) {
    return Serializer.serializeAsync('cat', await this.catService.create(cat));
  }

  @Get()
  @Roles('user', 'admin')
  async findAll() {
    return Serializer.serializeAsync('cat', await this.catService.findAll());
  }

  @Get(':id')
  @Roles('user', 'admin')
  async findOne(@Param('id') id) {
    return Serializer.serializeAsync('cat', await this.catService.findOne(id));
  }
}
