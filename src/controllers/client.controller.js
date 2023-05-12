import { ClientDTO } from "../dto/client/client.dto.js";
import { CreateClientDTO } from "../dto/client/create-client.dto.js";
import { Client } from "../models/client.model.js";

const addClient = async (req, res) => {
  const client = req.parsedData;

  const existingClient = await Client.findOne({
    where: { firstname: client.firstname, lastname: client.lastname },
  });

  if (existingClient) {
    return res.status(409).json({
      message: "Client already exists",
    });
  }

  const result = await Client.create(client);

  res.json(new CreateClientDTO(result));
};

const getClients = async (req, res) => {
  const clients = (await Client.findAll()).map(
    (client) => new ClientDTO(client)
  );

  res.json(clients);
};

export const ClientController = {
  addClient,
  getClients,
};
