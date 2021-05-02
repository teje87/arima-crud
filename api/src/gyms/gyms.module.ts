import { Module } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { GymsController } from './gyms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GymsRepository } from './gyms.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([GymsRepository]), UsersModule],
  controllers: [GymsController],
  providers: [GymsService],
})
export class GymsModule {}
