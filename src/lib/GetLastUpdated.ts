import { Project } from "./interfaces/Project.interface";

export default async function getLastModified(project: Project) {
    return new Promise(async (resolve) => {
        const localLastModified = localStorage.getItem(`lastModified-${project.id}`);
        const now = new Date();

        // If the date is stored in local storage, check if it is older than 24 hours
        if (localLastModified) {
            // Parse the stored data
            const { lastModified, timestamp } = JSON.parse(localLastModified);

            // If the data is older than 24 hours, update it
            if (now.getTime() - new Date(timestamp).getTime() < 86400000) {
                project.date = lastModified;
                return resolve(project);
            }
        }

        // Get the name of the repository from the GitHub link
        const res = await fetch(`https://api.github.com/repos/${project.repoName}/commits`);

        // If the request fails, set the date to the default date
        if (!res.ok) return resolve(project);

        // Parse the response
        const data = await res.json();

        // If there is no data, set the date to the default date
        if (!data) return resolve(project);

        // Set the date of the last commit
        project.date = new Date(data[0].commit.author.date);

        // Return a new project object with the updated date
        const returnProject = { ...project, date: new Date(data[0].commit.author.date) };

        // Store the date of the last commit in local storage, as well as the timestamp of when it was stored
        localStorage.setItem(`lastModified-${project.id}`, JSON.stringify({ lastModified: returnProject.date, timestamp: now }));

        resolve(returnProject);
    }) as Promise<Project>;
}
