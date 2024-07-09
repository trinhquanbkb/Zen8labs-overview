"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("groups", [
      {
        id: 1,
        name: "Hội đồng hương Mỹ Đức",
        avatar: null,
        is_delete: false,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 2,
        name: "Euro 2024",
        avatar: null,
        is_delete: false,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
      {
        id: 3,
        name: "Nhóm lớp 12A0",
        avatar: null,
        is_delete: false,
        created_at: "2024-07-04T03:08:11.625Z",
        updated_at: "2024-07-04T03:08:11.625Z",
      },
    ]);
    await queryInterface.sequelize.query(`
    SELECT setval(
      pg_get_serial_sequence('groups', 'id'), 
      (SELECT MAX(id) FROM "groups")
    );
  `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("groups", null, {});
  },
};
