import yup from "yup";
export const CreateProductBodySchema = yup.object({
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  qty: yup.number(),
});
