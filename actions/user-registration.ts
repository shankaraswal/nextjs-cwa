"use server";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegistrationSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const registrationActions = async (
  data: z.infer<typeof RegistrationSchema>
) => {
  const validateLoginForm = RegistrationSchema.safeParse(data);
  if (!validateLoginForm.success) {
    return { error: "Invalid credentials !" };
  }
  const { email, password, name } = validateLoginForm.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User/Email already exists!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: send verification email token to user

  return { success: "Successfuly user registered !" };
};
