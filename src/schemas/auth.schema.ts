import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const registerSchema = loginSchema
  .extend({
    confirmPassword: z.string().min(8, { message: "Repeat password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don't exsist!",
    path: ["confrimPassword"],
  });

export type loginSchemaType = z.infer<typeof loginSchema>;
export type registerSchemaType = z.infer<typeof registerSchema>;