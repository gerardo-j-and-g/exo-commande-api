import yup from "yup";
export const UpdateProductBodySchema = yup.object({
  name: yup.string(),
  price: yup.number(),
  description: yup.string(),
  qty: yup.number(),
});
