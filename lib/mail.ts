import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmationLink = `http://localhost:3000/auth/new-verification?verify?token=${token}`;

  await resend.emails.send({
    from: "testaswal@gmail.com",
    to: email,
    subject: "Verify your email",
    html: `<p>Please click on the link below to verify your email</p><a href="${confirmationLink}">${confirmationLink}</a>`,
  });
};
