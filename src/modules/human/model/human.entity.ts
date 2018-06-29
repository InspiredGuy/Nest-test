import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cat } from '../../cat/model/cat.entity';

@Entity()
export class Human {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  surname: string;

  @OneToMany(type => Cat, cat => cat.owner)
  cats: Cat[];
}
