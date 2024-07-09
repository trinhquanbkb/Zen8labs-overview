"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_groups", [
      {
        id: 1,
        group_id: 1,
        user_id: 1,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 2,
        group_id: 1,
        user_id: 2,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 3,
        group_id: 1,
        user_id: 3,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 4,
        group_id: 1,
        user_id: 4,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 5,
        group_id: 2,
        user_id: 2,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 6,
        group_id: 2,
        user_id: 3,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 7,
        group_id: 2,
        user_id: 4,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 8,
        group_id: 3,
        user_id: 1,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 9,
        group_id: 3,
        user_id: 3,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 10,
        group_id: 3,
        user_id: 5,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 11,
        group_id: 3,
        user_id: 6,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 12,
        group_id: 3,
        user_id: 7,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
    ]);
    await queryInterface.sequelize.query(`
    SELECT setval(
      pg_get_serial_sequence('user_groups', 'id'), 
      (SELECT MAX(id) FROM "user_groups")
    );
  `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("user_groups", null, {});
  },
};
