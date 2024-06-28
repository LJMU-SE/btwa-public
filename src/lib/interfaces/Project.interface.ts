export interface Project {
    id: string;
    title: string;
    summary: string;
    contributors: string[];
    technologies: string[];
    website?: string;
    github: string;
    repoName: string;
    image: string;
    date: Date;
}
