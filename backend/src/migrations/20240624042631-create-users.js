"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      nick_name: {
        type: Sequelize.STRING,
      },
      full_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      blocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      socket: {
        type: Sequelize.STRING,
      },
      about: {
        type: Sequelize.STRING,
      },
      token_fcm: {
        type: Sequelize.STRING,
      },
      last_online: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      dob: {
        type: Sequelize.DATE,
      },
      facebook_auth: {
        type: Sequelize.STRING,
      },
      google_auth: {
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
