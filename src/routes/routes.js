import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
import { ClientController } from "../controllers/client.controller.js";
import { OrderController } from "../controllers/order.controller.js";

import { validationMiddelware } from "../middlewares/validation.middleware.js";

import { CreateClientBodySchema } from "../validations/create-client.body.schema.js";
import { CreateProductBodySchema } from "../validations/create-product.body.schema.js";
import { UpdateProductBodySchema } from "../validations/update-product.body.schema.js";

export const router = Router();

router.get("/", (req, res) => {
  res.send("API is working");
});

router.route("/products").get(ProductController.getProducts);
router
  .route("/product")
  .post(
    validationMiddelware(CreateProductBodySchema),
    ProductController.addProduct
  );
router
  .route("/product/:id")
  .put(
    validationMiddelware(UpdateProductBodySchema),
    ProductController.updateProduct
  );

router.route("/clients").get(ClientController.getClients);
router
  .route("/client")
  .post(
    validationMiddelware(CreateClientBodySchema),
    ClientController.addClient
  );

router.route("/order").post(OrderController.newOrder);
router.route("/order/:id").delete(OrderController.cancelOrder);
