import * as yup from "yup";

export const formSchemaOne = yup.object().shape({
  nome: yup
    .string()
    .required("Nome é obrigátorio")
    .min(10, "Insira o nome completo"),
  telefone: yup.string().required("Telefone é obrigátorio"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("E-mail é obrigátorio"),
  numero_conta_contrato: yup
    .string()
    .required("Conta contrato é obrigátorio")
    .min(8, "Insira todos os números"),
});
