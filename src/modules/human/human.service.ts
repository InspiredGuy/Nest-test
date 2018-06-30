import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Human } from './model/human.entity';
import { Repository } from 'typeorm';
import { DbService } from '../../db/db.service';

@Injectable()
export class HumanService extends DbService<Human> {
  constructor(
    @InjectRepository(Human)
    private readonly humanRepository: Repository<Human>,
  ) {
    super(humanRepository);
  }
}
