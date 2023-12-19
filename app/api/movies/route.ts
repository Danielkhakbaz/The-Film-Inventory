import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";
import Prisma from "prisma/client/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextApiRequest) {
  const url = new URL(request.url as string);

  const playlist = url.searchParams.get("playlist");

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
