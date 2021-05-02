"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClimbDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_climb_dto_1 = require("./create-climb.dto");
class UpdateClimbDto extends mapped_types_1.PartialType(create_climb_dto_1.CreateClimbDto) {
}
exports.UpdateClimbDto = UpdateClimbDto;
//# sourceMappingURL=update-climb.dto.js.map