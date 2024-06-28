export interface Project {
    id: string;
    title: string;
    summary: string;
    description: string;
    contributors: string[];
    technologies: string[];
    website?: string;
    github: string;
    repoName: string;
    image: string;
    date: Date;
}
