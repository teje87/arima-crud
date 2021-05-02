import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Climb } from 'src/climbs/entities/climb.entity';

export default class CreateGyms implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Climb)
      .values([
        { name: 'Politena +', grade: '6a' },
        { name: 'Hiedra, papel o tijera', grade: '6b' },
        { name: 'Mar de romos', grade: '7a' },
        { name: 'Politena', grade: '5b' },
      ])
      .execute();
  }
}
