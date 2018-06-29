import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Serializer } from '../api/serializer';

@Injectable()
export class SerializePipe implements PipeTransform<any> {
  constructor(private readonly schema) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    return await Serializer.deserializeAsync(this.schema, value);
  }
}
