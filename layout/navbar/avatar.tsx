"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Avatar = () => {
  const { data, status } = useSession();

  return (
    <>
      {status === "loading" ? (
        <div className="skeleton w-20" />
      ) : status === "authenticated" ? (
        <Link href="http://localhost:3000/api/auth/signout">
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
            href="http://localhost:3000/api/auth/signin"
            className="w-full border-2 lg:border-none"
          >
            Sign in
          </Link>
        )
      )}
    </>
  );
};

export default Avatar;
