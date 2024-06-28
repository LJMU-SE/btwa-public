import TeamMember from "@/lib/interfaces/TeamMember.interface";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
    return (
        <div className="h-full w-full pt-[60px] relative flex">
            <img
                className="absolute left-[calc(50%-60px)] w-[120px] h-[120px] rounded-full -mt-[60px] z-10 bg-white object-cover object-center"
                src={member.avatar}
                alt={`${member.name}'s Avatar`}
            />
            <div className="relative shadow-md rounded-md bg-white bottom-0 p-5 pt-[80px] flex flex-col flex-grow">
                <h2 className="font-medium text-xl text-center">{member.name}</h2>
                <h3 className="font-light text-sm text-center opacity-75">{member.role}</h3>
                <p className="text-md mt-2 flex-grow overflow-clip">{member.description}</p>
                <Link
                    href={`mailto:${member.email}`}
                    className="block text-center mt-5 rounded-md bg-black text-white p-2 transition-all hover:shadow-md hover:opacity-85"
                >
                    Contact
                </Link>

                {(member.github || member.site) && (
                    <div className="flex gap-2 flex-nowrap mt-2">
                        {member.github && (
                            <Link
                                href={`${member.github}`}
                                target="_blank"
                                className="w-full flex items-center justify-center text-center rounded-md bg-black text-white p-2 transition-all hover:shadow-md hover:opacity-85"
                            >
                                <FaGithub className="inline-block mr-2" /> GitHub
                            </Link>
                        )}

                        {member.site && (
                            <Link
                                href={`${member.site}`}
                                target="_blank"
                                className="w-full flex items-center justify-center text-center rounded-md bg-black text-white p-2 transition-all hover:shadow-md hover:opacity-85"
                            >
                                <CiGlobe className="inline-block mr-2" /> Website
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
