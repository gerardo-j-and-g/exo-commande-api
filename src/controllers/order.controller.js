const newOrder = async (req, res) => {
  res.send("New order");
};
const cancelOrder = async (req, res) => {
  res.send("Cancel order");
};

export const OrderController = {
  newOrder,
  cancelOrder,
};
