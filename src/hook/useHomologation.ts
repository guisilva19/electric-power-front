export default function useHomologation() {
  const register = async (body: any) => {
    const response = await fetch("/api/homologation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log(result);
    return result;
  };

  const upload = async (files: File[], id: string) => {
    const formData = new FormData();

    // Adicionar cada arquivo ao FormData
    files.forEach((file) => {
      formData.append("files", file); // Aqui 'files' é o nome do campo que o NestJS espera
    });

    // Fazer a requisição POST com FormData
    const response = await fetch(`/api/documents/${id}`, {
      method: "POST",
      body: formData, // Enviar o FormData contendo os arquivos
    });

    // Pegar o resultado da resposta
    const result = await response.json();
    return result;
  };

  return { register, upload };
}
