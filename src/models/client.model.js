import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";

export const Client = sequelize.define("client", {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
