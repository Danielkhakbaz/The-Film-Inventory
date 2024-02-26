import { NextRequest, NextResponse } from "next/server";
import Prisma from "prisma/client/client";

type MoviesType = {
  score: string;
  episodes: number;
};

export async function GET(request: NextRequest) {
  const url = new URL(request.url as string);

  const playlist = url.searchParams.get("playlist");
  const kind = url.searchParams.get("filter");
  const sort = url.searchParams.get("sort");

  if (!playlist || (playlist !== "favorites" && playlist !== "watch-later")) {
    return NextResponse.json(
      {
        message: "You've got to be kidding me!",
      },
      {
        status: 400,
      }
    );
  }

  let movies;

  if (playlist === "favorites") {
    movies = await Prisma.movie.findMany({
      where: {
        isFavorite: true,
      },
    });
  } else if (playlist === "watch-later") {
    movies = await Prisma.movie.findMany({
      where: {
        isWatchLater: true,
      },
    });
  }

  if (kind === "movies") {
    movies = await Prisma.movie.findMany({
      where: {
        kind: "movies",
      },
    });
  } else if (kind === "tv") {
    movies = await Prisma.movie.findMany({
      where: {
        kind: "tv",
      },
    });
  }

  if (sort === "highest_rating") {
    movies = movies?.sort(
      (a: MoviesType, b: MoviesType) =>
        parseFloat(b.score) - parseFloat(a.score)
    );
  } else if (sort === "lowest_rating") {
    movies = movies?.sort(
      (a: MoviesType, b: MoviesType) =>
        parseFloat(a.score) - parseFloat(b.score)
    );
  } else if (sort === "most_episodes") {
    movies = movies?.sort(
      (a: MoviesType, b: MoviesType) => b.episodes - a.episodes
    );
  } else if (sort === "least_episodes") {
    movies = movies?.sort(
      (a: MoviesType, b: MoviesType) => a.episodes - b.episodes
    );
  }

  return NextResponse.json(movies);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const movie = await Prisma.movie.findUnique({
    where: {
      id: body.id,
    },
  });

  if (!movie) {
    const newMovie = await Prisma.movie.create({
      data: {
        id: body.id,
        name: body.name,
        image: body.image,
        kind: body.kind,
        score: body.score,
        episodes: body.episodes,
        isFavorite: body.playlist === "favorites" ? true : false,
        isWatchLater: body.playlist === "watch-later" ? true : false,
      },
    });

    return NextResponse.json(newMovie, { status: 200 });
  } else {
    if (body.playlist === "favorites") {
      if (movie.isFavorite) {
        return NextResponse.json(
          { error: "This movie is already your favorite!" },
          { status: 400 }
        );
      } else {
        const updatedMovie = await Prisma.movie.update({
          where: {
            id: body.id,
          },
          data: {
            isFavorite: true,
          },
        });

        return NextResponse.json(updatedMovie, { status: 200 });
      }
    } else if (body.playlist === "watch-later") {
      if (movie.isWatchLater) {
        return NextResponse.json(
          { error: "This movie is already in your watch later playlist!" },
          { status: 400 }
        );
      } else {
        const updatedMovie = await Prisma.movie.update({
          where: {
            id: body.id,
          },
          data: {
            isWatchLater: true,
          },
        });

        return NextResponse.json(updatedMovie, { status: 200 });
      }
    }
  }
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();

  await Prisma.movie.delete({ where: { id: body?.id } });

  return NextResponse.json(
    {
      message: "User has been successfully deleted!",
    },
    { status: 200 }
  );
}
