import { PartialType } from '@nestjs/mapped-types';
import { CreateClimbDto } from './create-climb.dto';

export class UpdateClimbDto extends PartialType(CreateClimbDto) {}
