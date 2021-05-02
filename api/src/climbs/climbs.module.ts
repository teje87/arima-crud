import { Module } from '@nestjs/common';
import { ClimbsService } from './climbs.service';
import { ClimbsController } from './climbs.controller';
import { ClimbRepository } from './climbs.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClimbRepository])],
  controllers: [ClimbsController],
  providers: [ClimbsService],
})
export class ClimbsModule {}
