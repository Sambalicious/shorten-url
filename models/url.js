"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Url extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Url.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      shortUrl: { type: DataTypes.STRING, allowNull: false },
      longUrl: { type: DataTypes.STRING, allowNull: false },
      shortCode: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Url",
    }
  );
  return Url;
};
