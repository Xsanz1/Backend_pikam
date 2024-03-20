'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tbl_menu.hasOne(models.tbl_media, {
        foreignKey: 'menu_image',
        sourceKey: 'media_uuid_table',
      });

      
      tbl_menu.belongsTo(models.tbl_typemenu, {
        foreignKey: 'menu_typemenu',
        targetKey: 'typemenu_uuid',
        as: "menu_typemenu_as",
      });// define association here
    }
  }
  tbl_menu.init(
    {
      menu_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(50),
      },
    menu_uuid: DataTypes.STRING,
    menu_name: DataTypes.STRING,
    menu_statusavailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    menu_description: DataTypes.STRING,
    menu_quantity: DataTypes.INTEGER,
    menu_image: DataTypes.STRING,
    menu_typemenu: DataTypes.STRING,
    menu_recomendation: DataTypes.STRING,
    menu_create_at: DataTypes.DATE,
    menu_update_at: DataTypes.DATE,
    menu_delete_at: DataTypes.DATE,
    menu_create_by: DataTypes.STRING,
    menu_update_by: DataTypes.STRING,
    menu_delete_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbl_menu',
    tableName: 'tbl_menu',
    timestamps: false,
    paranoid: true
  });
  return tbl_menu;
};