import { read, readFileSync, readdirSync } from "fs";
import { NextResponse } from "next/server";
import { parse } from "marked";
import { Project } from "@/lib/interfaces/Project.interface";

export function GET(req: Request, { params }: { params: { id: string } }) {
    let project = null as Project | null;
    let description = null as string | null;

    try {
        // Loop through the project files until a project with the correct ID is found
        const projectFiles = readdirSync("src/lib/projects");
        project = projectFiles
            .filter((file) => file !== "_Template.ts")
            .map((file) => {
                // Load the typescript file
                let project = require(`@/lib/projects/${file}`).default;

                return project;
            })
            .find((project) => project.id === params.id);
    } catch (error) {
        return NextResponse.json({ error: "Error loading project" }, { status: 500 });
    }

    try {
        description = readFileSync(`./src/lib/documents/${project?.id}.md`, "utf-8");
    } catch (error) {
        return NextResponse.json({ error: "Error loading project description" }, { status: 500 });
    }

    if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });
    if (!description) return NextResponse.json({ error: "Project description not found" }, { status: 404 });

    return NextResponse.json({ project, description: parse(description) }, { status: 200 });
}
