"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";

const Avatar = () => {
  const { data, status } = useSession();

  return (
    <>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "authenticated" ? (
        <div className="avatar placeholder">
          <div className="w-7 bg-red-400 text-neutral-content rounded-full">
            <Image
              src={data.user?.image as string}
              alt="the user's github image"
              width={10}
              height={10}
            />
          </div>
        </div>
      ) : (
        status === "unauthenticated" && <p>Sign in</p>
      )}
    </>
  );
};

export default Avatar;
