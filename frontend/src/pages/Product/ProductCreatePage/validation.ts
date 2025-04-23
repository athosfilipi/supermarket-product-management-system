import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  price: yup
    .number()
    .typeError("Preço deve ser um número")
    .positive("Preço deve ser maior que zero")
    .required("Preço é obrigatório"),
  description: yup.string().optional().default(''), 
  image: yup.string().optional(), 
  brandId: yup.string().required("Marca é obrigatória"),
});

export const validateForm = async (data: any) => {
  try {
    await schema.validate(data, { abortEarly: false });
    return null; 
  } catch (err: any) {
    return err.inner;
  }
};
