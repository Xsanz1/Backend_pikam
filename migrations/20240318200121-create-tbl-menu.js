'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_menu', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menu_uuid: {
        type: Sequelize.STRING
      },
      menu_name: {
        type: Sequelize.STRING
      },
      menu_statusavailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      menu_description: {
        type: Sequelize.STRING
      },
      menu_quantity: {
        type: Sequelize.INTEGER
      },
      menu_image: {
        type: Sequelize.STRING
      },
      menu_typemenu: {
        type: Sequelize.STRING
      },
      menu_recomendation: {
        type: Sequelize.STRING
      },
      menu_create_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      menu_update_at: {
        type: Sequelize.DATE
      },
      menu_delete_at: {
        type: Sequelize.DATE
      },
      menu_create_by: {
        type: Sequelize.STRING
      },
      menu_update_by: {
        type: Sequelize.STRING
      },
      menu_delete_by: {
        type: Sequelize.STRING
      },
    }, {
      timestamps: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_menu');
  }
};