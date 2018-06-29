import { Module } from '@nestjs/common';
import { HumanModule } from './modules/human/human.module';
import { CatModule } from './modules/cat/cat.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), HumanModule, CatModule],
})
export class AppModule {}
