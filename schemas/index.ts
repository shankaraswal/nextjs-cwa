import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters",
  }),
});

export const RegistrationSchema = z.object({
  name: z.string().min(3, {
    message: "First Name must be at least 3 characters long",
  }),
  // lname: z.string().min(3, {
  //   message: "Last Name must be at least 3 characters long",
  // }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});
