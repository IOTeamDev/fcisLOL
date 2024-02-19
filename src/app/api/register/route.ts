import prisma from "@/src/lib/PrismaClient";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log(res);
  try {
    const newUser = await prisma.user.create({
      data: {
        firstName: res.name,
        lastName: res.lastName,
        email: res.email,
        password: res.password,
        role: "USER",
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
}
prisma.$disconnect();
