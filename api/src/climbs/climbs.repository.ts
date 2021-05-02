import { EntityRepository, Repository } from 'typeorm';
import { Climb } from './entities/climb.entity';

@EntityRepository(Climb)
export class ClimbRepository extends Repository<Climb> {}
