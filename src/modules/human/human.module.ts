import { Module } from '@nestjs/common';
import { HumanController } from './human.controller';
import { HumanService } from './human.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Human } from './model/human.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Human])],
  controllers: [HumanController],
  providers: [HumanService],
})
export class HumanModule {}
