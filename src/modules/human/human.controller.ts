import { Body, Controller, Get, Param, Post, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { HumanService } from './human.service';
import { Serializer } from './model/human.serializer';
import { DeserializePipe } from '../../pipes/deserialize.pipe';
import { Human } from './model/human.entity';
import { AccessControlGuard } from '../../guards/access-control/access-control.guard';
import { Roles } from '../../decorators/roles/roles.decorator';
import { SerializeInterceptor } from '../../interceptors/serialize/serialize.interceptor';

@Controller('human')
@UseGuards(AccessControlGuard)
@UseInterceptors(new SerializeInterceptor('human', Serializer))
export class HumanController {
  constructor(private readonly humanService: HumanService) {}

  @Post()
  @Roles('admin')
  @UsePipes(new DeserializePipe('human'), new ValidationPipe())
  async create(@Body() human: Human) {
    return await this.humanService.create(human);
  }

  @Get()
  @Roles('user', 'admin')
  async findAll() {
    return await this.humanService.findAll();
  }

  @Get(':id')
  @Roles('user', 'admin')
  async findOne(@Param('id') id) {
    return await this.humanService.findOne(id);
  }
}
