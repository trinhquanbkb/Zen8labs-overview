"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        first_name: "abc",
        last_name: "Zen8labs",
        nick_name: "zenny",
        email: "zen8labs@gmail.com",
        phone: "03242332532",
        address: "Thon noi-Thuong Lam-My Duc-Ha Noi",
        password:
          "$2a$10$eMEyY0hhVqBGHASjqTtRH.I3jnhNGN0G2YlX49QW8w9Q8LhjyAQ6W",
        avatar: null,
        role_id: null,
        deleted: false,
        blocked: false,
        socket: null,
        facebook_auth: null,
        google_auth: null,
        code: null,
        created_at: "2024-07-03T08:11:20.473Z",
        updated_at: "2024-07-03T08:11:20.473Z",
      },
      {
        id: 3,
        first_name: "Trịnh Hoàng",
        last_name: "Quân",
        nick_name: "Quân Trịnh Hoàng",
        email: "quanbkk65@gmail.com",
        phone: null,
        password: null,
        address: null,
        avatar: null,
        role_id: null,
        deleted: false,
        socket: null,
        blocked: false,
        facebook_auth: null,
        google_auth: "110855109246208677704",
        code: null,
        created_at: "2024-07-04T03:08:06.431Z",
        updated_at: "2024-07-04T03:08:06.431Z",
      },
      {
        id: 2,
        first_name: "Gia Bảo",
        last_name: "Trần",
        nick_name: "Quân Trịnh Hoàng",
        email: "quan20028a3kb@gmail.com",
        phone: null,
        address: null,
        avatar: null,
        password: null,
        role_id: null,
        deleted: false,
        blocked: false,
        facebook_auth: null,
        socket: null,
        google_auth: "104490012712564206960",
        code: null,
        created_at: "2024-07-03T09:55:15.850Z",
        updated_at: "2024-07-03T11:16:39.086Z",
      },
    ]);
    await queryInterface.sequelize.query(`
    SELECT setval(
      pg_get_serial_sequence('users', 'id'), 
      (SELECT MAX(id) FROM "users")
    );
  `);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
