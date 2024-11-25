// import "server-only";
"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";

const schema = z.object({
  ownerName: z.string().min(1, "Owner's name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  petName: z.string().min(1, "Pet's name is required"),
  species: z.enum(["dog", "cat"]).refine((val) => val !== undefined, {
    message: "Please select either dog or cat",
  }),
  breed: z.string().min(1, "Breed is required"),
  color: z.string().min(1, "Color is required"),
  dateOfBirth: z.string().min(1, "Date of birth or age is required"),
  sex: z.enum(["male", "female"]).refine((val) => val !== undefined, {
    message: "Please select either male or female",
  }),
});

export async function addNewClient(prevState: unknown, formData: FormData) {
  const validatedFields = schema.safeParse({
    ownerName: formData.get("ownerName"),
    address: formData.get("address"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    petName: formData.get("petName"),
    species: formData.get("species"),
    breed: formData.get("breed"),
    color: formData.get("color"),
    dateOfBirth: formData.get("dateOfBirth"),
    sex: formData.get("sex"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "There were errors with your submission",
    };
  }

  const {
    ownerName,
    address,
    phone,
    email,
    petName,
    species,
    breed,
    color,
    dateOfBirth,
    sex,
  } = validatedFields.data;

  try {
    // Insert client information
    const clientResult = await sql`
      INSERT INTO clients (name, address, phone, email)
      VALUES (${ownerName}, ${address}, ${phone}, ${email})
      RETURNING id
    `;
    const clientId = clientResult.rows[0].id;

    // Insert pet information
    await sql`
      INSERT INTO pets (client_id, name, species, breed, color, date_of_birth, sex)
      VALUES (${clientId}, ${petName}, ${species}, ${breed}, ${color}, ${dateOfBirth}, ${sex})
    `;

    return { message: "Client and pet registered successfully" };
  } catch (error) {
    console.error("Error registering client and pet:", error);
    return { message: "Error registering client and pet. Please try again." };
  }
}
