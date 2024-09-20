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

  return { register };
}

