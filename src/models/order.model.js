import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";
import { Client } from "./client.model.js";

export const Order = sequelize.define("order", {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Order.belongsTo(Client);
