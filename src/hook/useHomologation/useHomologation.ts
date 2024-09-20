export default function useHomologation() {
  const register = async (body: any) => {
    // const response = await fetch("/api/homologation", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: body,
    // });
    console.log(body)
    // return await response.json();
  };

  return { register };
}


// "ampliacao": false,
// "cabo_do_padrao": "16",
// "disjuntor_do_padrao": "63",
// "distancia_entre_inversor_e_distribuicao": "1",
// "email": "2003silvagui@gmail.com",
// "modelo_do_inversor_inserido": "1",
// "modelo_do_modulo_inserido": "1",
// "nome": "Guilherme Silva Fernandes",
// "numero_conta_contrato": "12345678",
// "quantidade_inversores_inseridos": "1",
// "quantidade_medidores": "1",
// "quantidade_modulos_inseridos": "1",
// "telefone": "7799664132",
// "tensao_de_fornecimento": "127/220",
// "tipo_de_ligacao": "BIFÁSICA",
// "transformador":false,