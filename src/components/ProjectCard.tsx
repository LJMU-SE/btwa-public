import { Project } from "@/lib/interfaces/Project.interface";
import moment from "moment";
import Link from "next/link";

import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={`/projects/${project.id}`}
            className="w-full flex flex-col gap-2 project-card relative lg:hover:scale-105 transition-all text-white"
        >
            <div className="z-10 w-full h-full flex flex-col bg-background-primary/80 hover:opacity-90">
                <div className="w-full h-full bg-black/70  p-6">
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <p className="text-sm text-accent font-light">Last Updated {moment(project.date).fromNow()}</p>
                    <p className="mt-3">{project.summary}</p>
                    <div className={"flex-grow"}></div>
                    <p className="text-gray-300 whitespace-pre-wrap mt-3">{project.technologies.join("     ")}</p>
                    <div className="flex gap-2 mt-3">
                        {project.website && <CiGlobe size={20} />}
                        {project.github && <FaGithub size={20} />}
                    </div>
                </div>
            </div>
            <img src={project.image} alt={project.title} className="absolute z-0 w-full top-0 left-0 h-full object-cover object-center" />
        </Link>
    );
}
