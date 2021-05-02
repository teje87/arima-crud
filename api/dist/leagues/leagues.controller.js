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
exports.LeaguesController = void 0;
const common_1 = require("@nestjs/common");
const leagues_service_1 = require("./leagues.service");
const create_league_dto_1 = require("./dto/create-league.dto");
const update_league_dto_1 = require("./dto/update-league.dto");
const swagger_1 = require("@nestjs/swagger");
let LeaguesController = class LeaguesController {
    constructor(leaguesService) {
        this.leaguesService = leaguesService;
    }
    create(createLeagueDto) {
        return this.leaguesService.create(createLeagueDto);
    }
    findAll() {
        return this.leaguesService.findAll();
    }
    findOne(id) {
        return this.leaguesService.findOne(+id);
    }
    update(id, updateLeagueDto) {
        return this.leaguesService.update(+id, updateLeagueDto);
    }
    remove(id) {
        return this.leaguesService.remove(+id);
    }
};
__decorate([
    swagger_1.ApiOperation({
        summary: 'Crear una liga',
    }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_league_dto_1.CreateLeagueDto]),
    __metadata("design:returntype", void 0)
], LeaguesController.prototype, "create", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Recuperar todas las ligas',
    }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LeaguesController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Recuperar la liga con ID',
    }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeaguesController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Actualizar la liga con ID',
    }),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_league_dto_1.UpdateLeagueDto]),
    __metadata("design:returntype", void 0)
], LeaguesController.prototype, "update", null);
__decorate([
    swagger_1.ApiOperation({
        summary: 'Borrar la liga con ID',
    }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeaguesController.prototype, "remove", null);
LeaguesController = __decorate([
    swagger_1.ApiTags('Leagues'),
    common_1.Controller('leagues'),
    __metadata("design:paramtypes", [leagues_service_1.LeaguesService])
], LeaguesController);
exports.LeaguesController = LeaguesController;
//# sourceMappingURL=leagues.controller.js.map