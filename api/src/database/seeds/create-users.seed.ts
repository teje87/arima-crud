import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        { firstName: 'Mikel', lastName: 'Tejero' },
        { firstName: 'Iñigo', lastName: 'Tejero' },
        { firstName: 'Miren', lastName: 'Barbado' },
        { firstName: 'Loren', lastName: 'Barbado' },
      ])
      .execute();
  }
}
