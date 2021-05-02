"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClimbsModule = void 0;
const common_1 = require("@nestjs/common");
const climbs_service_1 = require("./climbs.service");
const climbs_controller_1 = require("./climbs.controller");
const climbs_repository_1 = require("./climbs.repository");
const typeorm_1 = require("@nestjs/typeorm");
let ClimbsModule = class ClimbsModule {
};
ClimbsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([climbs_repository_1.ClimbRepository])],
        controllers: [climbs_controller_1.ClimbsController],
        providers: [climbs_service_1.ClimbsService],
    })
], ClimbsModule);
exports.ClimbsModule = ClimbsModule;
//# sourceMappingURL=climbs.module.js.map