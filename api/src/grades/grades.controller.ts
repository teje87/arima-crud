import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Grades')
@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @ApiOperation({
    summary: 'Crear un grado',
  })
  @Post()
  create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradesService.create(createGradeDto);
  }

  @ApiOperation({
    summary: 'Recuperar todos los grados',
  })
  @Get()
  findAll() {
    return this.gradesService.findAll();
  }

  @ApiOperation({
    summary: 'Recuper el grado con ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gradesService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Actualizar el grado con ID',
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateGradeDto: UpdateGradeDto) {
    return this.gradesService.update(+id, updateGradeDto);
  }

  @ApiOperation({
    summary: 'Borrar el grado con ID',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gradesService.remove(+id);
  }
}
