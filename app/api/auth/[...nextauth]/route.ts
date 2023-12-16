import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Prisma from "prisma/client/client";

const handler = NextAuth({
  adapter: PrismaAdapter(Prisma),
  providers: [
    Github({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  //   session: {
  //     strategy: "jwt",
  //   },
});

export { handler as GET, handler as POST };
