import { z } from "zod";

export async function addNewClient(prevState: any, formData: FormData) {
  const schema = z.object({
    ownerName: z.string().min(1),
  });
  const data = schema.parse({
    ownerName: formData.get("ownerName"),
  });

  return { message: "Client added successfully" };
}
