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
exports.GymsController = void 0;
const common_1 = require("@nestjs/common");
const gyms_service_1 = require("./gyms.service");
const create_gym_dto_1 = require("./dto/create-gym.dto");
const update_gym_dto_1 = require("./dto/update-gym.dto");
const swagger_1 = require("@nestjs/swagger");
const users_service_1 = require("../users/users.service");
let GymsController = class GymsController {
    constructor(gymsService, usersService) {
        this.gymsService = gymsService;
        this.usersService = usersService;
    }
    create(createGymDto) {
        return this.gymsService.create(createGymDto);
    }
    findAll(page) {
        return this.gymsService.findAll(page);
    }
    findOne(id) {
        return this.gymsService.findOne(+id);
    }
    findUsersFromGym(id) {
        return this.usersService.findUsersFromGym(id);
    }
    update(id, updateGymDto) {
        return this.gymsService.update(+id, updateGymDto);
    }
    remove(id) {
        return this.gymsService.remove(+id);
    }
};
__decorate([
    swagger_1.ApiOperation({
        summary: 'Crear un rocodromo/gym',
    }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gym_dto_1.CreateGymDto]),
    __metadata("design:returntype", void 0)
], GymsController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Recuperar todos los rocodromos/gyms',
    }),
    common_1.Get(),
    __param(0, common_1.Query('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GymsController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Recuperar el rocodromo/gym con ID',
    }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GymsController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Recupera todos los usuario del rocodromo con ID',
    }),
    common_1.Get(':id/users'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GymsController.prototype, "findUsersFromGym", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Actualizar el rocodromo/gym con ID',
    }),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gym_dto_1.UpdateGymDto]),
    __metadata("design:returntype", void 0)
], GymsController.prototype, "update", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Borrar el rocodromo/gym con ID',
    }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GymsController.prototype, "remove", null);
GymsController = __decorate([
    swagger_1.ApiTags('Gyms'),
    common_1.Controller('gyms'),
    __metadata("design:paramtypes", [gyms_service_1.GymsService,
        users_service_1.UsersService])
], GymsController);
exports.GymsController = GymsController;
//# sourceMappingURL=gyms.controller.js.map