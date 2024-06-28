"use client";

import { Container } from "@/components/Containers";
import ProjectInfoSideBar from "@/components/ProjectInfoSidebar";
import { Project } from "@/lib/interfaces/Project.interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BarLoader } from "react-spinners";
import { useRouter } from "next/navigation";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
    const [project, setProject] = useState<Project | null>(null);
    const [description, setDescription] = useState<string | null>(null);

    const router = useRouter();

    useEffect(() => {
        console.log(`Loading project information for ${params.id}`);

        const timeout = setTimeout(async () => {
            const projectRequest = await fetch(`/api/projects/${params.id}`);
            const projectData = await projectRequest.json();

            console.log(projectData);

            if (projectData.error) {
                console.error(projectData.error);
                return router.push("/projects");
            }

            setProject(projectData.project);
            setDescription(projectData.description);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Container>
            <Link
                href={"/projects"}
                target={"_self"}
                className={"mt-5 mb-2 flex items-center transition-all group hover:text-accent w-max font-normal text-md"}
            >
                <FaArrowLeft className={"inline mr-3 group-hover:-translate-x-1 transition-all text-accent"} /> Back
            </Link>

            {project == null && (
                <div className="w-full h-96 flex justify-center items-center">
                    <BarLoader color="#FF9000" />
                </div>
            )}

            {project && (
                <div className={"flex flex-wrap md:flex-nowrap mb-10 gap-5"}>
                    <ProjectInfoSideBar project={project} />
                    {description && (
                        <div
                            id="project-description"
                            className="w-full md:w-2/3"
                            dangerouslySetInnerHTML={{ __html: `<h1>Description</h1> ${description}` }}
                        ></div>
                    )}
                </div>
            )}
        </Container>
    );
}
