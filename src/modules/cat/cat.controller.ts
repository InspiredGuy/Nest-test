import { Body, Controller, Get, Param, Post, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatService } from './cat.service';
import { Serializer } from './model/cat.serializer';
import { DeserializePipe } from '../../pipes/deserialize.pipe';
import { Cat } from './model/cat.entity';
import { AccessControlGuard } from '../../guards/access-control/access-control.guard';
import { Roles } from '../../decorators/roles/roles.decorator';
import { SerializeInterceptor } from '../../interceptors/serialize/serialize.interceptor';

@Controller('cat')
@UseGuards(AccessControlGuard)
@UseInterceptors(new SerializeInterceptor('cat', Serializer))
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @Roles('user', 'admin')
  @UsePipes(new DeserializePipe('cat'), new ValidationPipe())
  async create(@Body() cat: Cat) {
    return await this.catService.create(cat);
  }

  @Get()
  @Roles('user', 'admin')
  async findAll() {
    return await this.catService.findAll();
  }

  @Get(':id')
  @Roles('user', 'admin')
  async findOne(@Param('id') id) {
    return await this.catService.findOne(id);
  }
}
