import { readdirSync } from "fs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const projectFiles = readdirSync("src/lib/projects");

    let projects = projectFiles
        .filter((file) => file !== "_Template.ts")
        .map((file) => {
            const project = require(`@/lib/projects/${file}`).default;
            return project;
        });

    projects = projects.sort((a, b) => b.date - a.date);

    return NextResponse.json(projects, { status: 200 });
}
