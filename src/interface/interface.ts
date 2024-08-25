export interface FormSchemaOne {
  nome: string;
  email: string;
  telefone: string;
  numero_conta_contrato: string;
}

export interface FormSchemaTwoMag {
  modelo_do_inversor_inserido: string;
  modelo_do_modulo_inserido: string;
  quantidade_modulos_inseridos: string;
  quantidade_inversores_inseridos: string;
  modelo_do_inversor_homologado: string;
  modelo_do_modulo_homologado: string;
  quantidade_modulos_homologados: string;
  quantidade_inversores_homologados: string;
}

export interface FormSchemaTwo {
  modelo_do_inversor_inserido: string;
  modelo_do_modulo_inserido: string;
  quantidade_modulos_inseridos: string;
  quantidade_inversores_inseridos: string;
}

export interface FormSchemaThree {
  quantidade_medidores: string;
  distancia_entre_inversor_e_distribuicao: string;
  tipo_de_ligacao: string;
  tensao_de_fornecimento: string;
  disjuntor_do_padrao: string;
  cabo_do_padrao: string;
  transformador: boolean;
  potencia_transformador: string;
  carga_instalada: string;
}

// carga_instalada                         String?
// outras_conta_recebera_credito           Boolean?
// numero_conta_contrato_02                String?
// media_consumo_conta_02                  String?
// numero_conta_contrato_03                String?
// media_consumo_conta_03                  String?
