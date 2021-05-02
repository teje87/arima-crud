import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { GymsService } from './gyms.service';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/users.service';
import { Gym } from './entities/gym.entity';

@ApiTags('Gyms')
@Controller('gyms')
export class GymsController {
  constructor(
    private readonly gymsService: GymsService,
    private usersService: UsersService,
  ) {}

  @ApiOperation({
    summary: 'Crear un rocodromo/gym',
  })
  @Post()
  create(@Body() createGymDto: CreateGymDto) {
    return this.gymsService.create(createGymDto);
  }

  @ApiOperation({
    summary: 'Recuperar todos los rocodromos/gyms',
  })
  @Get()
  findAll(@Query('page') page: number): Promise<[Gym[], number]> {
    return this.gymsService.findAll(page);
  }

  @ApiOperation({
    summary: 'Recuperar el rocodromo/gym con ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gymsService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Recupera todos los usuario del rocodromo con ID',
  })
  @Get(':id/users')
  findUsersFromGym(@Param('id') id: string) {
    return this.usersService.findUsersFromGym(id);
  }

  @ApiOperation({
    summary: 'Actualizar el rocodromo/gym con ID',
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateGymDto: UpdateGymDto) {
    return this.gymsService.update(+id, updateGymDto);
  }

  @ApiOperation({
    summary: 'Borrar el rocodromo/gym con ID',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gymsService.remove(+id);
  }
}
