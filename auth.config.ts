import bcrypt from "bcryptjs";
import Credential from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

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
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
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
