import express from "express";
import { router } from "./routes/routes.js";

// Import des models
import "./models/db.js";
import "./models/product.model.js";
import "./models/client.model.js";
import "./models/order.model.js";
import "./models/order-line.model.js";

import { errorMiddleware } from "./middlewares/error.middleware.js";

// Création du serveur
const app = express();

// Middleware
app.use(express.json());
app.use(router);

// Gestion des erreurs
app.use(errorMiddleware);

// Lancement du serveur
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
