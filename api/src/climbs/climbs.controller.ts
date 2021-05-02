import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClimbsService } from './climbs.service';
import { CreateClimbDto } from './dto/create-climb.dto';
import { UpdateClimbDto } from './dto/update-climb.dto';

@ApiTags('Climbs')
@Controller('climbs')
export class ClimbsController {
  constructor(private readonly climbsService: ClimbsService) {}

  @ApiOperation({
    summary: 'Genera un nuevo bloque',
  })
  @Post()
  create(@Body() createClimbDto: CreateClimbDto) {
    return this.climbsService.create(createClimbDto);
  }

  @ApiOperation({
    summary: 'Recupera todos los bloques',
  })
  @Get()
  findAll() {
    return this.climbsService.findAll();
  }

  @ApiOperation({
    summary: 'Recupera el bloque con ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.climbsService.findOne(+id);
  }
  @ApiOperation({
    summary: 'Actualizar el bloque con ID',
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateClimbDto: UpdateClimbDto) {
    return this.climbsService.update(+id, updateClimbDto);
  }

  @ApiOperation({
    summary: 'Borrar el bloque con ID',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.climbsService.remove(+id);
  }
}
