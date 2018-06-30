import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { HumanService } from './human.service';
import { Serializer } from './model/human.serializer';
import { SerializePipe } from '../../pipes/serialize.pipe';
import { Human } from './model/human.entity';
import { AccessControlGuard } from '../../guards/access-control/access-control.guard';
import { Roles } from '../../decorators/roles/roles.decorator';

@Controller('human')
@UseGuards(AccessControlGuard)
export class HumanController {
  constructor(private readonly humanService: HumanService) {}

  @Post()
  @Roles('admin')
  @UsePipes(new SerializePipe('human'), new ValidationPipe())
  async create(@Body() human: Human) {
    return Serializer.serializeAsync('human', await this.humanService.create(human));
  }

  @Get()
  @Roles('user', 'admin')
  async findAll() {
    return Serializer.serializeAsync('human', await this.humanService.findAll());
  }

  @Get(':id')
  @Roles('user', 'admin')
  async findOne(@Param('id') id) {
    return Serializer.serializeAsync('human', await this.humanService.findOne(id));
  }
}
