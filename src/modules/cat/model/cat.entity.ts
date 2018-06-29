import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Human } from '../../human/model/human.entity';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @ManyToOne(type => Human, human => human.cats)
  owner: Human;
}
