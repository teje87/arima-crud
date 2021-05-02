import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Leagues')
@Controller('leagues')
export class LeaguesController {
  constructor(private readonly leaguesService: LeaguesService) {}

  @ApiOperation({
    summary: 'Crear una liga',
  })
  @Post()
  create(@Body() createLeagueDto: CreateLeagueDto) {
    return this.leaguesService.create(createLeagueDto);
  }

  @ApiOperation({
    summary: 'Recuperar todas las ligas',
  })
  @Get()
  findAll() {
    return this.leaguesService.findAll();
  }

  @ApiOperation({
    summary: 'Recuperar la liga con ID',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leaguesService.findOne(+id);
  }

  @ApiOperation({
    summary: 'Actualizar la liga con ID',
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateLeagueDto: UpdateLeagueDto) {
    return this.leaguesService.update(+id, updateLeagueDto);
  }

  @ApiOperation({
    summary: 'Borrar la liga con ID',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leaguesService.remove(+id);
  }
}
