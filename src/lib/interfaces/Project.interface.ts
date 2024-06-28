export interface ProjectStructureProps {
    id: string;
    title: string;
    summary: string;
    description: string;
    technologies: string[];
    website?: string;
    github: string;
    repoName: string;
    image: string;
    date: Date;
}
