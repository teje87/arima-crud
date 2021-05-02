import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym } from './entities/gym.entity';
import { GymsRepository } from './gyms.repository';
export declare class GymsService {
    private gymsRepository;
    constructor(gymsRepository: GymsRepository);
    create(createGymDto: CreateGymDto): Promise<CreateGymDto & Gym>;
    findAll(page: number): Promise<[Gym[], number]>;
    findOne(id: number): string;
    update(id: number, updateGymDto: UpdateGymDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
