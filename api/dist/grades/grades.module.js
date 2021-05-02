"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradesModule = void 0;
const common_1 = require("@nestjs/common");
const grades_service_1 = require("./grades.service");
const grades_controller_1 = require("./grades.controller");
let GradesModule = class GradesModule {
};
GradesModule = __decorate([
    common_1.Module({
        controllers: [grades_controller_1.GradesController],
        providers: [grades_service_1.GradesService],
    })
], GradesModule);
exports.GradesModule = GradesModule;
//# sourceMappingURL=grades.module.js.map