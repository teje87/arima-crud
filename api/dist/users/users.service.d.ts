import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './users.repository';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserRepository);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: number): string;
    findUsersFromGym(id: string): Promise<any[]>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
