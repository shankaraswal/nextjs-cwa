"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const loginActions = async (data: z.infer<typeof LoginSchema>) => {
  const validateLoginForm = LoginSchema.safeParse(data);
  if (!validateLoginForm.success) {
    return { error: "Invalid credentials !" };
  }
  return { success: "Successfuly logged-in !" };
};
