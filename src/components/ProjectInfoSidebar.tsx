import { Project } from "@/lib/interfaces/Project.interface";
import getLastModified from "@/lib/GetLastUpdated";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import team from "@/lib/team";
import TeamMember from "@/lib/interfaces/TeamMember.interface";

/**
 * The project info sidebar
 *
 * @param {ProjectInfoSideBarProps} props The project info sidebar props
 * @returns {JSX.Element} The project info sidebar
 */
export default function ProjectInfoSideBar({ project }: { project: Project }) {
    const [updatedProject, setUpdatedProject] = useState<Project | null>(null);
    const [contributors, setContributors] = useState<TeamMember[]>([]);

    useEffect(() => {
        getLastModified(project).then((project: Project) => setUpdatedProject(project));

        // Get the project contributors and their respective team member profile from the team file
        const contributors = project.contributors.map((contributor) => {
            const teamMember = team.find((member) => member.id === contributor);
            return teamMember as TeamMember;
        });

        setContributors(contributors);
    }, []);

    return (
        <div className="w-full md:w-max">
            <h1 className="text-4xl font-bold">{updatedProject?.title}</h1>
            <p className="text-accent text-light text-xs mt-2">
                Last updated: {moment(updatedProject?.date).format("DD/MM/YY")} ({moment(updatedProject?.date).fromNow()})
            </p>
            <p className="text-gray-400 text-sm mt-5 md:max-w-80">{updatedProject?.summary}</p>
            <div className="mt-5">
                {updatedProject?.github && (
                    <Link href={updatedProject?.github} target="_blank" className="mt-2 block hover:text-gray-400 transition-all">
                        <FaGithub size={20} className="inline-block mr-2" /> {updatedProject?.repoName}
                    </Link>
                )}
                {updatedProject?.website && (
                    <Link href={updatedProject?.website} target="_blank" className="mt-2 block hover:text-gray-400 transition-all">
                        <CiGlobe size={20} className="inline-block mr-2" /> {updatedProject?.website.replace("https://", "").split("/")[0]}
                    </Link>
                )}

                {contributors.length > 0 && (
                    <div className="mt-4">
                        <h3>Contributors</h3>
                        <div className="flex flex-wrap gap-3 mt-2">
                            {contributors.map((contributor) => (
                                <Link href={contributor.site || contributor.github || "/about-us"} target="_blank" key={contributor.id}>
                                    <img
                                        src={contributor.avatar}
                                        alt={contributor.name}
                                        title={contributor.name}
                                        className="w-10 h-10 rounded-full inline-block"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
