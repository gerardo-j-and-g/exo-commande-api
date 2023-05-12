import yup from "yup";
export const CreateClientBodySchema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
});
