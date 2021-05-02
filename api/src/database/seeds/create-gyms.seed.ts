import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Gym } from 'src/gyms/entities/gym.entity';

export default class CreateGyms implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Gym)
      .values([
        { name: 'The Factory Boulder', phone: '943123123' },
        { name: 'Pio Baroja Polikiroldegia', phone: '943123123' },
        { name: 'Area 51 Boulder Aretoa', phone: '943123123' },
        { name: 'Bihatz Eskalada', phone: '943123123' },
      ])
      .execute();
  }
}
