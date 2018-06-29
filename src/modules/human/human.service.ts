import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Human } from './model/human.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HumanService {
  constructor(
    @InjectRepository(Human)
    private readonly humanRepository: Repository<Human>,
  ) { }

  async create(human: Human): Promise<Human> {
    const newHuman = this.humanRepository.create(human);
    return await this.humanRepository.save(newHuman);
  }

  async findAll(): Promise<Human[]> {
    return await this.humanRepository.find();
  }

  async findOne(id: number): Promise<Human> {
    return await this.humanRepository.findOne(id);
  }
}
