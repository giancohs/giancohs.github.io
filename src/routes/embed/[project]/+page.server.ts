import type { PageServerLoad } from './$types';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

// Generate entries for prerendering
export const entries = () => {
    const projectsPath = path.resolve(process.cwd(), 'static', 'projects');
    const projects = fs.readdirSync(projectsPath)
        .filter(file => fs.statSync(path.join(projectsPath, file)).isDirectory())
        .map(project => ({ project }));
    
    return projects;
};

export const load = (async ({ params }) => {
    const projectName = params.project;
    const projectPath = path.resolve(process.cwd(), 'static', 'projects', projectName);
    
    try {
        if (fs.existsSync(projectPath)) {
            return {
                name: projectName,
                contentPath: `/projects/${projectName}/index.html`,
                type: 'file'
            };
        }
    } catch (err) {
        console.error('Error loading project:', err);
    }

    // Return a default response if project not found
    return {
        name: projectName,
        type: 'file',
        contentPath: `/projects/${projectName}/index.html`
    };
}) satisfies PageServerLoad; 