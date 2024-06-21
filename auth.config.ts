import type { NextAuthConfig } from "next-auth";
import { NextApiRequest } from "next";

import Credential from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

interface User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export default {
  providers: [
    Credential({
      async authorize(credentials) {
        const validateCreds = LoginSchema.safeParse(credentials);

        if (!validateCreds.success) {
          return null; // Validation failed
        }

        const { email, password } = validateCreds.data;
        const user = await getUserByEmail(email);

        if (!user || !user.password) {
          return null; // User not found or no password set
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) {
          return user; // Successful authentication
        }

        return null; // Password mismatch
      },
    }),
  ],
};
