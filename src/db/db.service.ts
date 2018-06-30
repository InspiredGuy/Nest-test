import { ObjectLiteral, Repository } from 'typeorm';

export class DbService<T extends ObjectLiteral> {
  constructor(
    private readonly genericRepository: Repository<T>,
  ) { }

  async create(entity: T): Promise<T> {
    const newEntity = this.genericRepository.create(entity);
    return await this.genericRepository.save(newEntity);
  }

  async findAll(): Promise<T[]> {
    return await this.genericRepository.find();
  }

  async findOne(id: number): Promise<T> {
    return await this.genericRepository.findOne(id);
  }
}
