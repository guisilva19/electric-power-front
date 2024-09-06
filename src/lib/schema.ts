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

export const formSchemaTwoWithMagnification = yup.object().shape({
  modelo_do_inversor_inserido: yup
    .string()
    .required("Insira o modelo do inversor"),
  modelo_do_modulo_inserido: yup.string().required("Insira o modelo do módulo"),
  quantidade_modulos_inseridos: yup.string().required("Insira o modelo"),
  quantidade_inversores_inseridos: yup.string().required("Insira o modelo"),
  modelo_do_inversor_homologado: yup
    .string()
    .required("Insira o modelo do inversor"),
  modelo_do_modulo_homologado: yup
    .string()
    .required("Insira o modelo do módulo"),
  quantidade_modulos_homologados: yup
    .string()
    .required("Insira a quantidade de módulos homologados"),
  quantidade_inversores_homologados: yup
    .string()
    .required("Insira a quantidade de inversores homologados"),
});

export const formSchemaTwoNotMagnification = yup.object().shape({
  modelo_do_inversor_inserido: yup
    .string()
    .required("Insira o modelo do inversor"),
  modelo_do_modulo_inserido: yup.string().required("Insira o modelo do módulo"),
  quantidade_modulos_inseridos: yup.string().required("Insira o modelo"),
  quantidade_inversores_inseridos: yup.string().required("Insira o modelo"),
});

export const formSchemaThree = yup.object().shape({
  quantidade_medidores: yup
    .string()
    .required("Insira a quantidade de medidores"),
  distancia_entre_inversor_e_distribuicao: yup
    .string()
    .required("Insira a distância média entre inversor e distribuição"),
  carga_instalada: yup.string().required("Informe a carga instalada"),
});
