import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { Gym } from './entities/gym.entity';
import { GymsRepository } from './gyms.repository';

@Injectable()
export class GymsService {
  constructor(private gymsRepository: GymsRepository) {}
  async create(createGymDto: CreateGymDto) {
    return await this.gymsRepository.save(createGymDto);
  }

  async findAll(page: number): Promise<[Gym[], number]> {
    try {
      return await this.gymsRepository.findAll(page);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} gym`;
  }

  async update(id: number, updateGymDto: UpdateGymDto) {
    return await this.gymsRepository.update(id, updateGymDto);
  }

  async remove(id: number) {
    console.log(id);
    return await this.gymsRepository.delete(id);
  }
}
