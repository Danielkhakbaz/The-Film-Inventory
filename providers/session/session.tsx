"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type SessionProviderFromNextAuthProps = {
  children: ReactNode;
  session: never;
};

export const SessionProviderFromNextAuth = ({
  children,
  session,
}: SessionProviderFromNextAuthProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
