import { Climb } from 'src/climbs/entities/climb.entity';
import { Gym } from 'src/gyms/entities/gym.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Climb, (climb) => climb.user)
  climbs: Climb[];
}
