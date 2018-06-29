import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { AccessControlMiddleware } from '../../middlewares/access-control/access-control.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './model/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(AccessControlMiddleware)
      .with(['user', 'admin'])
      .forRoutes(CatController);
  }
}
