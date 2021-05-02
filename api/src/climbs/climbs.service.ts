import { Injectable } from '@nestjs/common';
import { CreateClimbDto } from './dto/create-climb.dto';
import { UpdateClimbDto } from './dto/update-climb.dto';

@Injectable()
export class ClimbsService {
  create(createClimbDto: CreateClimbDto) {
    return 'This action adds a new climb';
  }

  findAll() {
    return `This action returns all climbs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} climb`;
  }

  update(id: number, updateClimbDto: UpdateClimbDto) {
    return `This action updates a #${id} climb`;
  }

  remove(id: number) {
    return `This action removes a #${id} climb`;
  }
}
