"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_entity_1 = require("../../users/entities/user.entity");
class CreateUsers {
    async run(factory, connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .into(user_entity_1.User)
            .values([
            { firstName: 'Mikel', lastName: 'Tejero' },
            { firstName: 'Iñigo', lastName: 'Tejero' },
            { firstName: 'Miren', lastName: 'Barbado' },
            { firstName: 'Loren', lastName: 'Barbado' },
        ])
            .execute();
    }
}
exports.default = CreateUsers;
//# sourceMappingURL=create-users.seed.js.map