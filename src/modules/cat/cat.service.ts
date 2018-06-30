import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './model/cat.entity';
import { Repository } from 'typeorm';
import { DbService } from '../../db/db.service';

@Injectable()
export class CatService extends DbService<Cat> {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {
    super(catRepository);
  }
}
