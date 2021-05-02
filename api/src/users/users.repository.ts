import { Gym } from 'src/gyms/entities/gym.entity';
import { EntityRepository, getConnection, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findUsersFromGym(id) {
    return await getConnection()
      .createQueryBuilder()
      .relation(Gym, 'users')
      .of(id)
      .loadMany();
  }
}
