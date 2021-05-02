"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gym_entity_1 = require("../../gyms/entities/gym.entity");
class CreateGyms {
    async run(factory, connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .into(gym_entity_1.Gym)
            .values([
            { name: 'The Factory Boulder', phone: '943123123' },
            { name: 'Pio Baroja Polikiroldegia', phone: '943123123' },
            { name: 'Area 51 Boulder Aretoa', phone: '943123123' },
            { name: 'Bihatz Eskalada', phone: '943123123' },
        ])
            .execute();
    }
}
exports.default = CreateGyms;
//# sourceMappingURL=create-gyms.seed.js.map