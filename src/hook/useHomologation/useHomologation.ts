export default function useHomologation() {
  const register = async (body: any) => {
    const response = await fetch("/api/homologation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
    console.log(response)
    console.log(body)
    return response;
  };

  return { register };
}
