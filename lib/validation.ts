import { z } from "zod";

export const UserFromValidation = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50, "Username must be at least 50"),
  email: z.string().email("Invalid email address"),
  // password: z.string().min(8, "password must be at least 8 characters"),
  phoneNumber: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});
