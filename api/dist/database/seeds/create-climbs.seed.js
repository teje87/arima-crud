"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const climb_entity_1 = require("../../climbs/entities/climb.entity");
class CreateGyms {
    async run(factory, connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .into(climb_entity_1.Climb)
            .values([
            { name: 'Politena +', grade: '6a' },
            { name: 'Hiedra, papel o tijera', grade: '6b' },
            { name: 'Mar de romos', grade: '7a' },
            { name: 'Politena', grade: '5b' },
        ])
            .execute();
    }
}
exports.default = CreateGyms;
//# sourceMappingURL=create-climbs.seed.js.map