"use server";
import * as z from "zod";
import { AuthError } from "next-auth";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT_URL } from "@/routes";
import { sendVerificationEmail } from "@/lib/mail";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";

export const loginActions = async (data: z.infer<typeof LoginSchema>) => {
  const validateLoginForm = LoginSchema.safeParse(data);

  if (!validateLoginForm.success) {
    return { error: "Invalid credentials !" };
  }
  const { email, password } = validateLoginForm.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist !" };
  }

  if (!existingUser.emailVerified) {
    const verificaitonToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificaitonToken.email,
      verificaitonToken.token
    );

    return { success: "Confirmation email sent !" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT_URL,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials !" };
        default:
          return { error: "Something went wrong !" };
      }
    }
    throw error;
  }
};
