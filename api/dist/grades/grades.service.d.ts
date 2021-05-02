import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
export declare class GradesService {
    create(createGradeDto: CreateGradeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGradeDto: UpdateGradeDto): string;
    remove(id: number): string;
}
