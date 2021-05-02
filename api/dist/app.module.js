"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const gyms_module_1 = require("./gyms/gyms.module");
const grades_module_1 = require("./grades/grades.module");
const climbs_module_1 = require("./climbs/climbs.module");
const leagues_module_1 = require("./leagues/leagues.module");
const trainings_module_1 = require("./trainings/trainings.module");
const lists_module_1 = require("./lists/lists.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            users_module_1.UsersModule,
            gyms_module_1.GymsModule,
            grades_module_1.GradesModule,
            climbs_module_1.ClimbsModule,
            leagues_module_1.LeaguesModule,
            trainings_module_1.TrainingsModule,
            lists_module_1.ListsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map