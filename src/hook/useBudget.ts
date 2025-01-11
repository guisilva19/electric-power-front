import { toast } from "react-hot-toast";

export default function useBudget() {
  const budget = async (body: any) => {
    const fetchBudget = fetch("/api/orcamento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    toast.promise(
      fetchBudget,
      {
        loading: "Enviando sua solicitação de orçamento...",
        success:
          "Recebemos sua solicitação de orçamento e entraremos em contato em breve. Obrigado pelo interesse!",
        error:
          "No momento não foi possível solicitar orçamento, entre em contato por WhatsApp.",
      },
      {
        success: {
          duration: 5000, // duração opcional do toast de sucesso
        },
        error: {
          duration: 7000, // duração opcional do toast de erro
        },
      }
    );

    try {
      const response = await fetchBudget;
      if (!response.ok) {
        throw new Error("Falha na solicitação do orçamento.");
      }
    } catch (err) {
      console.error("Erro ao enviar orçamento:", err);
    }
  };

  return { budget };
}
