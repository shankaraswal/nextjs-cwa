import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
