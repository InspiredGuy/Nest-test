import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './model/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  async create(cat: Cat): Promise<Cat> {
    const newCat = this.catRepository.create(cat);
    return await this.catRepository.save(newCat);
  }

  async findAll(): Promise<Cat[]> {
    return await this.catRepository.find();
  }

  async findOne(id: number): Promise<Cat> {
    return await this.catRepository.findOne(id);
  }
}
