import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
import { ClientController } from "../controllers/client.controller.js";
import { OrderController } from "../controllers/order.controller.js";

export const router = Router();

router.get("/", (req, res) => {
  res.send("API is working");
});

router.route("/products").get(ProductController.getProducts);
router.route("/product").post(ProductController.addProduct);
router.route("/product/:id").put(ProductController.updateProduct);

router.route("/clients").get(ClientController.getClients);
router.route("/client").post(ClientController.addClient);

router.route("/order").post(OrderController.newOrder);
router.route("/order/:id").delete(OrderController.cancelOrder);
