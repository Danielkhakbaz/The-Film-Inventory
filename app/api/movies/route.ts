import { NextRequest, NextResponse } from "next/server";
import Prisma from "prisma/client/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  const movies = await Prisma.movie.findMany();

  return NextResponse.json(movies);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newMovie = await Prisma.movie.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(newMovie, { status: 201 });
}
