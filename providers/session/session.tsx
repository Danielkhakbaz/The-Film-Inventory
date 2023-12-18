"use client";

import { SessionProvider } from "next-auth/react";

export const SessionProviderFromNextAuth = ({ children, session }: any) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
