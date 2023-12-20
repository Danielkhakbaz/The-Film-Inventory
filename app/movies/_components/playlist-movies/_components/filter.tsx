"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const sortSearchParams = searchParams.get("sort");
  const filterSearchParams = searchParams.get("filter");
  const playlistSearchParams = searchParams.get("playlist");

  return (
    <label className="form-control w-full max-w-xs mb-6">
      <div className="label">
        <span className="label-text">Filter by:</span>
      </div>
      <select
        className="select select-bordered"
        value={filterSearchParams ? filterSearchParams : "undefined"}
        onChange={(event) => {
          if (event.currentTarget.value === "undefined") {
            if (sortSearchParams) {
              router.push(
                `/movies?playlist=${playlistSearchParams}&sort=${sortSearchParams}`
              );
            } else {
              router.push(`/movies?playlist=${playlistSearchParams}`);
            }
          } else {
            if (sortSearchParams) {
              router.push(
                `/movies?playlist=${playlistSearchParams}&filter=${event.currentTarget.value}&sort=${sortSearchParams}`
              );
            } else {
              router.push(
                `/movies?playlist=${playlistSearchParams}&filter=${event.currentTarget.value}`
              );
            }
          }
        }}
      >
        <option value="undefined">None</option>
        <option value="movies">Movies</option>
        <option value="tv">TV</option>
      </select>
    </label>
  );
};

export default Filter;
