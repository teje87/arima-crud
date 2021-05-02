import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TrainingsService } from './trainings.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Trainings')
@Controller('trainings')
export class TrainingsController {
  constructor(private readonly trainingsService: TrainingsService) {}

  @ApiOperation({
    summary: 'Generar un entrenamiento',
  })
  @Post()
  create(@Body() createTrainingDto: CreateTrainingDto) {
    return this.trainingsService.create(createTrainingDto);
  }

  @ApiOperation({
    summary: 'Recuperar todos los entrenamientos',
  })
  @Get()
  findAll() {
    return this.trainingsService.findAll();
  }

  @ApiOperation({
    summary: 'Recuperar el entrenamiento con ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingsService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Actualizar el entrenamiento con ID',
  })
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTrainingDto: UpdateTrainingDto,
  ) {
    return this.trainingsService.update(+id, updateTrainingDto);
  }

  @ApiOperation({
    summary: 'Borrar el entrenamiento con ID',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingsService.remove(+id);
  }
}
