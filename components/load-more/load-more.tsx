"use client";

import { forwardRef } from "react";
import Image from "next/image";
import SpinnerImage from "public/images/spinner.svg";

const LoadMore = forwardRef((props, ref) => {
  return (
    <section className="flex justify-center items-center w-full">
      <div ref={ref as never}>
        <Image
          src={SpinnerImage}
          alt="spinner"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
    </section>
  );
});

LoadMore.displayName = "LoadMore";

export default LoadMore;
