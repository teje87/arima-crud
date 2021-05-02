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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GymsService = void 0;
const common_1 = require("@nestjs/common");
const gyms_repository_1 = require("./gyms.repository");
let GymsService = class GymsService {
    constructor(gymsRepository) {
        this.gymsRepository = gymsRepository;
    }
    async create(createGymDto) {
        return await this.gymsRepository.save(createGymDto);
    }
    async findAll(page) {
        try {
            return await this.gymsRepository.findAll(page);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    findOne(id) {
        return `This action returns a #${id} gym`;
    }
    async update(id, updateGymDto) {
        return await this.gymsRepository.update(id, updateGymDto);
    }
    async remove(id) {
        console.log(id);
        return await this.gymsRepository.delete(id);
    }
};
GymsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [gyms_repository_1.GymsRepository])
], GymsService);
exports.GymsService = GymsService;
//# sourceMappingURL=gyms.service.js.map