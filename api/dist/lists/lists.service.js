"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsService = void 0;
const common_1 = require("@nestjs/common");
let ListsService = class ListsService {
    create(createListDto) {
        return 'This action adds a new list';
    }
    findAll() {
        return `This action returns all lists`;
    }
    findOne(id) {
        return `This action returns a #${id} list`;
    }
    update(id, updateListDto) {
        return `This action updates a #${id} list`;
    }
    remove(id) {
        return `This action removes a #${id} list`;
    }
};
ListsService = __decorate([
    common_1.Injectable()
], ListsService);
exports.ListsService = ListsService;
//# sourceMappingURL=lists.service.js.map