import { EntityRepository, Repository } from "typeorm";
import { Gym } from "./entities/gym.entity";

@EntityRepository(Gym)
export class GymsRepository extends Repository<Gym> {
  async findAll(page: number): Promise<[Gym[], number]> {
    const skip = 3 * (page - 1);
    return await this.findAndCount({ skip, take: 3, order: { id: "ASC" } });
  }
}
