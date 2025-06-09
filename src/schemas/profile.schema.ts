import z from "zod";

export const profileSchema = z
  .object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't exsist!",
    path: ["confirmPassword"],
  });

export type ProfileSchemaType = z.infer<typeof profileSchema>;
