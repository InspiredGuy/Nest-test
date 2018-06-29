import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AccessControlMiddleware implements NestMiddleware {
  resolve(accessRights: string[]): MiddlewareFunction {
    return (req, res, next) => {
      // TODO: perform access control
      next();
    };
  }
}
