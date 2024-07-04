"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("convertations", [
      {
        id: 1,
        user_one: 3,
        user_two: 1,
        status: 0,
        created_at: "2024-07-03T08:11:20.473Z",
        updated_at: "2024-07-03T08:11:20.473Z",
      },
      {
        id: 2,
        user_one: 1,
        user_two: 2,
        status: 0,
        created_at: "2024-07-03T08:11:20.473Z",
        updated_at: "2024-07-03T08:11:20.473Z",
      },
      {
        id: 3,
        user_one: 3,
        user_two: 2,
        status: 0,
        created_at: "2024-07-03T08:11:20.473Z",
        updated_at: "2024-07-03T08:11:20.473Z",
      },
    ]);
    await queryInterface.sequelize.query(`
    SELECT setval(
      pg_get_serial_sequence('convertations', 'id'), 
      (SELECT MAX(id) FROM "convertations")
    );
  `);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("convertations", null, {});
  },
};
