"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLeagueDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_league_dto_1 = require("./create-league.dto");
class UpdateLeagueDto extends mapped_types_1.PartialType(create_league_dto_1.CreateLeagueDto) {
}
exports.UpdateLeagueDto = UpdateLeagueDto;
//# sourceMappingURL=update-league.dto.js.map