import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Prisma from "prisma/client/client";

const handler = NextAuth({
  adapter: PrismaAdapter(Prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };
