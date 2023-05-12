import { DataTypes } from "sequelize";
import { Order } from "./order.model.js";
import { Product } from "./product.model.js";
import { sequelize } from "./db.js";

export const OrderLine = sequelize.define("orderLine", {
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

OrderLine.belongsTo(Order);
Order.hasMany(OrderLine);

OrderLine.belongsTo(Product);
Product.hasMany(OrderLine);
