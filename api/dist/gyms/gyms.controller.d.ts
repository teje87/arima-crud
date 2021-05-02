import { GymsService } from './gyms.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { UsersService } from 'src/users/users.service';
import { Gym } from './entities/gym.entity';
export declare class GymsController {
    private readonly gymsService;
    private usersService;
    constructor(gymsService: GymsService, usersService: UsersService);
    create(createGymDto: CreateGymDto): Promise<CreateGymDto & Gym>;
    findAll(page: number): Promise<[Gym[], number]>;
    findOne(id: string): string;
    findUsersFromGym(id: string): Promise<any[]>;
    update(id: string, updateGymDto: UpdateGymDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
