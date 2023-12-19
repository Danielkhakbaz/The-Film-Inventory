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

  const movies = await Prisma.movie.findMany({
    where: {
      isFavorite: playlist === "favorites" ? true : false,
      isWatchLater: playlist === "watch-later" ? true : false,
    },
  });

  return NextResponse.json(movies);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newMovie = await Prisma.movie.create({
    data: {
      name: body.name,
      image: body.image,
      kind: body.kind,
      score: body.score,
      episodes: body.episodes,
      isFavorite: body.isFavorite,
      isWatchLater: body.isWatchLater,
    },
  });

  return NextResponse.json(newMovie, { status: 201 });
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
