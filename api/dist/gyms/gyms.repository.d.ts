import { Repository } from 'typeorm';
import { Gym } from './entities/gym.entity';
export declare class GymsRepository extends Repository<Gym> {
    findAll(page: number): Promise<[Gym[], number]>;
}
