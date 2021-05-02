import { CreateClimbDto } from './dto/create-climb.dto';
import { UpdateClimbDto } from './dto/update-climb.dto';
export declare class ClimbsService {
    create(createClimbDto: CreateClimbDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateClimbDto: UpdateClimbDto): string;
    remove(id: number): string;
}
