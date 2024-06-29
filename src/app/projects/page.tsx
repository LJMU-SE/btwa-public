"use client";

import { Container } from "@/components/Containers";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/lib/interfaces/Project.interface";
import { useEffect, useState } from "react";
import getLastModified from "@/lib/GetLastUpdated";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function OurProjects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const timeout = setTimeout(async () => {
            const projectFiles = await fetch("/api/projects");
            const projectData = await projectFiles.json();

            if (projectData.error) {
                console.error(projectData.error);
                toast.error(projectData.error);
            }

            Promise.all(projectData.map(getLastModified)).then(() => {
                setProjects(projectData.sort((a: Project, b: Project) => new Date(b.date).getTime() - new Date(a.date).getTime()));
            });
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <section id="meet-the-team" className="lg:min-h-dvh pt-5">
            <Container>
                <h1 className="text-4xl text-center font-semibold">Our Projects</h1>
                <p className="text-center mt-5">
                    Here are some of the projects that we have worked on during our time at Liverpool John Moores University!
                </p>

                {projects.length == 0 && (
                    <div className="w-full h-96 flex justify-center items-center">
                        <BarLoader color="#FF9000" />
                    </div>
                )}

                {projects.length > 0 && (
                    <div className="w-full my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </Container>
        </section>
    );
}
