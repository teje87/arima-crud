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
exports.ClimbsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const climbs_service_1 = require("./climbs.service");
const create_climb_dto_1 = require("./dto/create-climb.dto");
const update_climb_dto_1 = require("./dto/update-climb.dto");
let ClimbsController = class ClimbsController {
    constructor(climbsService) {
        this.climbsService = climbsService;
    }
    create(createClimbDto) {
        return this.climbsService.create(createClimbDto);
    }
    findAll() {
        return this.climbsService.findAll();
    }
    findOne(id) {
        return this.climbsService.findOne(+id);
    }
    update(id, updateClimbDto) {
        return this.climbsService.update(+id, updateClimbDto);
    }
    remove(id) {
        return this.climbsService.remove(+id);
    }
};
__decorate([
    swagger_1.ApiOperation({
        summary: 'Genera un nuevo bloque',
    }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_climb_dto_1.CreateClimbDto]),
    __metadata("design:returntype", void 0)
], ClimbsController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Recupera todos los bloques',
    }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClimbsController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Recupera el bloque con ID',
    }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClimbsController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Actualizar el bloque con ID',
    }),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_climb_dto_1.UpdateClimbDto]),
    __metadata("design:returntype", void 0)
], ClimbsController.prototype, "update", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Borrar el bloque con ID',
    }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClimbsController.prototype, "remove", null);
ClimbsController = __decorate([
    swagger_1.ApiTags('Climbs'),
    common_1.Controller('climbs'),
    __metadata("design:paramtypes", [climbs_service_1.ClimbsService])
], ClimbsController);
exports.ClimbsController = ClimbsController;
//# sourceMappingURL=climbs.controller.js.map