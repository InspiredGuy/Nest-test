import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HumanController } from './human.controller';
import { HumanService } from './human.service';
import { AccessControlMiddleware } from '../../middlewares/access-control/access-control.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Human } from './model/human.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Human])],
  controllers: [HumanController],
  providers: [HumanService],
})
export class HumanModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(AccessControlMiddleware)
      .with(['admin'])
      .forRoutes(HumanController);
  }
}
