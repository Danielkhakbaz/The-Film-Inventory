"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Sort = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const sortSearchParams = searchParams.get("sort");
  const filterSearchParams = searchParams.get("filter");
  const playlistSearchParams = searchParams.get("playlist");

  return (
    <label className="form-control w-full max-w-xs mb-6">
      <div className="label">
        <span className="label-text">Sort by:</span>
      </div>
      <select
        className="select select-bordered"
        value={sortSearchParams as string}
        onChange={(event) => {
          if (event.currentTarget.value === "none") {
            if (filterSearchParams) {
              router.push(
                `/movies?playlist=${playlistSearchParams}&filter=${filterSearchParams}`
              );
            } else {
              router.push(`/movies?playlist=${playlistSearchParams}`);
            }
          } else {
            if (filterSearchParams) {
              router.push(
                `/movies?playlist=${playlistSearchParams}&filter=${filterSearchParams}&sort=${event.currentTarget.value}`
              );
            } else {
              router.push(
                `/movies?playlist=${playlistSearchParams}&sort=${event.currentTarget.value}`
              );
            }
          }
        }}
      >
        <option value="none">None</option>
        <option value="highest_rating">Highest Rating</option>
        <option value="lowest_rating">Lowest Rating</option>
        <option value="most_episodes">Most episodes</option>
        <option value="least_episodes">Least episodes</option>
      </select>
    </label>
  );
};

export default Sort;
