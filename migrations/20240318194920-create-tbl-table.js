'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_table', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      table_uuid: {
        type: Sequelize.STRING
      },
      table_room: {
        type: Sequelize.STRING
      },
      table_number: {
        type: Sequelize.STRING
      },
      table_create_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      table_update_at: {
        type: Sequelize.DATE
      },
      table_delete_at: {
        type: Sequelize.DATE
      },
      table_create_by: {
        type: Sequelize.STRING
      },
      table_update_by: {
        type: Sequelize.STRING
      },
      table_delete_by: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_table');
  }
};