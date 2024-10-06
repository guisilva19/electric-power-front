import { toast } from "sonner";

export default function useBudget() {
  const budget = async (body: any) => {
    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        toast.success(
          "Recebemos sua solicitação de orçamento e entraremos em contato o mais breve possível. Agradecemos pelo interesse!"
        );
      }
    } catch (err) {
      toast.error(
        "No momento não foi possivel solicitar orçamento, entre em contato por WhatsApp"
      );
    }
  };

  return { budget };
}
