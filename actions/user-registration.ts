"use server";
import * as z from "zod";
import { RegistrationSchema } from "@/schemas";

export const registrationActions = async (
  data: z.infer<typeof RegistrationSchema>
) => {
  const validateLoginForm = RegistrationSchema.safeParse(data);
  if (!validateLoginForm.success) {
    return { error: "Invalid credentials !" };
  }
  return { success: "Successfuly registered !" };
};
