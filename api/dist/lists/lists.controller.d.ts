import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
export declare class ListsController {
    private readonly listsService;
    constructor(listsService: ListsService);
    create(createListDto: CreateListDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateListDto: UpdateListDto): string;
    remove(id: string): string;
}
