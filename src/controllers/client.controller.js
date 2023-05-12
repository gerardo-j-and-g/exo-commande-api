const addClient = async (req, res) => {
  res.send("Add client");
};
const getClients = async (req, res) => {
  res.send("Clients");
};

export const ClientController = {
  addClient,
  getClients,
};
