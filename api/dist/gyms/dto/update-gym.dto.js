"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGymDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_gym_dto_1 = require("./create-gym.dto");
class UpdateGymDto extends mapped_types_1.PartialType(create_gym_dto_1.CreateGymDto) {
}
exports.UpdateGymDto = UpdateGymDto;
//# sourceMappingURL=update-gym.dto.js.map