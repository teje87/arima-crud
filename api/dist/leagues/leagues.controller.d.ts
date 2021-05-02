import { LeaguesService } from './leagues.service';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
export declare class LeaguesController {
    private readonly leaguesService;
    constructor(leaguesService: LeaguesService);
    create(createLeagueDto: CreateLeagueDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateLeagueDto: UpdateLeagueDto): string;
    remove(id: string): string;
}
