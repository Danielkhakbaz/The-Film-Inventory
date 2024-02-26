"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Avatar = () => {
  const { data, status } = useSession();

  const handleSignIn = async () => {
    const { signIn } = await import("next-auth/react");

    await signIn("github");
  };

  const handleSignOut = async () => {
    const { signOut } = await import("next-auth/react");

    await signOut();
  };

  return (
    <>
      {status === "loading" ? (
        <div className="skeleton w-20" />
      ) : status === "authenticated" ? (
        <Link href="/" onClick={handleSignOut}>
          <div className="avatar w-full placeholder items-center gap-4">
            <div className="w-7 bg-red-400 text-neutral-content rounded-full">
              {data.user?.image ? (
                <Image
                  src={data.user?.image as string}
                  alt="the user's github image"
                  width={10}
                  height={10}
                />
              ) : (
                <span>{data.user?.name?.slice(0, 1)}</span>
              )}
            </div>
            Sign out
          </div>
        </Link>
      ) : (
        status === "unauthenticated" && (
          <Link
            href="/"
            className="w-full border-2 lg:border-none"
            onClick={handleSignIn}
          >
            Sign in
          </Link>
        )
      )}
    </>
  );
};

export default Avatar;
