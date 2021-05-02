import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
export declare class GradesController {
    private readonly gradesService;
    constructor(gradesService: GradesService);
    create(createGradeDto: CreateGradeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGradeDto: UpdateGradeDto): string;
    remove(id: string): string;
}
