"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTrainingDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_training_dto_1 = require("./create-training.dto");
class UpdateTrainingDto extends mapped_types_1.PartialType(create_training_dto_1.CreateTrainingDto) {
}
exports.UpdateTrainingDto = UpdateTrainingDto;
//# sourceMappingURL=update-training.dto.js.map