import type { NextAuthConfig } from "next-auth";
import Credential from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    Credential({
      authorize: async (credentials) => {
        const validateCreds = LoginSchema.safeParse(credentials);
        if (validateCreds.success) {
          const { email, password } = validateCreds.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (passwordsMatch) {
            return user;
          }
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
