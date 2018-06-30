import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(private readonly schema: string, private readonly serializer) {}

  intercept(context: ExecutionContext, call$: Observable<any>): Observable<any> {
    return call$.pipe(map((data) => this.serializer.serialize(this.schema, data)));
  }
}
