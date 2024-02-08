import { Prisma } from "@prisma/client";
import prisma from "../../../../lib/prisma";
import { NextRequest } from "next/server";

interface CreateTaskRequest extends Request {
  json: () => Promise<Prisma.TaskCreateInput>;
}

interface UpdateTaskRequest extends Request {
  json: () => Promise<Prisma.TaskUpdateInput>;
}

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return Response.json({ tasks });
  } catch (error) {
    return Response.json({ error: "Something went wrong!!!" }, { status: 500 });
  }
}

export async function POST(req: CreateTaskRequest) {
  try {
    const body = await req.json();

    if (!body) {
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    if (!body.name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    if (!body.description) {
      return Response.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }

    if (!body.priority) {
      return Response.json({ error: "Priority is required" }, { status: 400 });
    }

    if (!body.reference) {
      return Response.json({ error: "Reference is required" }, { status: 400 });
    }

    if (!body.type) {
      return Response.json({ error: "Type is required" }, { status: 400 });
    }

    const task = await prisma.task.create({
      data: body,
    });

    return Response.json({ task });
  } catch (error) {
    return Response.json({ error: "Something went wrong!!!" }, { status: 500 });
  }
}

export async function PUT(req: UpdateTaskRequest) {
  try {
    const body = await req.json();

    if (!body) {
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    if (!body?.id?.toString()) {
      return Response.json({ error: "Id is required" }, { status: 400 });
    }

    const task = await prisma.task.update({
      where: {
        id: body.id.toString(),
      },
      data: body,
    });

    return Response.json({ task });
  } catch (error) {
    return Response.json({ error: "Something went wrong!!!" }, { status: 500 });
  }
}
