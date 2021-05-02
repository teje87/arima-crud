"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListsController = void 0;
const common_1 = require("@nestjs/common");
const lists_service_1 = require("./lists.service");
const create_list_dto_1 = require("./dto/create-list.dto");
const update_list_dto_1 = require("./dto/update-list.dto");
const swagger_1 = require("@nestjs/swagger");
let ListsController = class ListsController {
    constructor(listsService) {
        this.listsService = listsService;
    }
    create(createListDto) {
        return this.listsService.create(createListDto);
    }
    findAll() {
        return this.listsService.findAll();
    }
    findOne(id) {
        return this.listsService.findOne(+id);
    }
    update(id, updateListDto) {
        return this.listsService.update(+id, updateListDto);
    }
    remove(id) {
        return this.listsService.remove(+id);
    }
};
__decorate([
    swagger_1.ApiOperation({
        summary: 'Crear una lista',
    }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_list_dto_1.CreateListDto]),
    __metadata("design:returntype", void 0)
], ListsController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Recuperar todas las listas',
    }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListsController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Recuperar una lista con ID',
    }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListsController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Actualizar una lista con ID',
    }),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_list_dto_1.UpdateListDto]),
    __metadata("design:returntype", void 0)
], ListsController.prototype, "update", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Borrar una lista con ID',
    }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListsController.prototype, "remove", null);
ListsController = __decorate([
    swagger_1.ApiTags('Lists'),
    common_1.Controller('lists'),
    __metadata("design:paramtypes", [lists_service_1.ListsService])
], ListsController);
exports.ListsController = ListsController;
//# sourceMappingURL=lists.controller.js.map