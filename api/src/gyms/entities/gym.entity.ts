import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gym {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  openedSince: Date;
}
