import { ClimbsService } from './climbs.service';
import { CreateClimbDto } from './dto/create-climb.dto';
import { UpdateClimbDto } from './dto/update-climb.dto';
export declare class ClimbsController {
    private readonly climbsService;
    constructor(climbsService: ClimbsService);
    create(createClimbDto: CreateClimbDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateClimbDto: UpdateClimbDto): string;
    remove(id: string): string;
}
