import { Project } from "@/lib/interfaces/Project.interface";

export default <Project>{
    id: "template-project",
    title: "Template Project",
    summary: "A short summary of the project.",

    description: ``,

    contributors: [],
    technologies: ["Skill 1", "Skill 2", "Skill 3"],
    website: "https://www.ljmu.dev",
    github: "https://www.github.com",
    repoName: "LJMU-SE/repo",
    image: "/img/meta/default.png",
    date: new Date("2023-09-01"),
};
