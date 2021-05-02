import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Lists')
@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @ApiOperation({
    summary: 'Crear una lista',
  })
  @Post()
  create(@Body() createListDto: CreateListDto) {
    return this.listsService.create(createListDto);
  }

  @ApiOperation({
    summary: 'Recuperar todas las listas',
  })
  @Get()
  findAll() {
    return this.listsService.findAll();
  }

  @ApiOperation({
    summary: 'Recuperar una lista con ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listsService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Actualizar una lista con ID',
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.listsService.update(+id, updateListDto);
  }

  @ApiOperation({
    summary: 'Borrar una lista con ID',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listsService.remove(+id);
  }
}
