import fs from 'node:fs';
import path from 'node:path';
import { error } from '@sveltejs/kit';

export const prerender = true;

// Tell SvelteKit which paths to prerender
export function entries() {
    const projectsPath = path.resolve(process.cwd(), 'static', 'projects');
    const results: { project: string }[] = [];

    try {
        // Get root level projects
        const projects = fs.readdirSync(projectsPath)
            .filter(file => fs.statSync(path.join(projectsPath, file)).isDirectory());

        // Add each project and its subfolders
        for (const project of projects) {
            results.push({ project });

            // Check for subfolders
            const projectPath = path.join(projectsPath, project);
            const subfolders = fs.readdirSync(projectPath)
                .filter(file => fs.statSync(path.join(projectPath, file)).isDirectory());

            // Add paths for subfolders
            for (const sub of subfolders) {
                results.push({ project: `${project}/${sub}` });
            }
        }
    } catch (err) {
        console.error('Error getting entries:', err);
    }

    return results;
}

function getSubProjects(dir: string): string[] {
    const results: string[] = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            if (fs.existsSync(path.join(fullPath, 'index.html'))) {
                results.push(item);
            }
        }
    }

    return results;
}

export async function load({ params }) {
    try {
        const projectsPath = path.resolve(process.cwd(), 'static', 'projects');
        const projectDir = path.join(projectsPath, params.project);
        
        // Handle nested paths
        const pathParts = params.project.split('/');
        const projectName = pathParts[0];
        const subPath = pathParts.slice(1).join('/');

        // If this is a nested path
        if (subPath) {
            const fullPath = path.join(projectsPath, projectName, subPath);
            if (!fs.existsSync(path.join(fullPath, 'index.html'))) {
                throw error(404, {
                    message: `Nested project ${subPath} not found`
                });
            }
            return {
                name: subPath,
                path: `/projects/${projectName}/${subPath}`,
                contentPath: `/projects/${projectName}/${subPath}/index.html`,
                parentName: projectName,
                type: 'file'
            };
        }

        // If the project directory doesn't exist
        if (!fs.existsSync(projectDir)) {
            throw error(404, {
                message: `Project ${projectName} not found`
            });
        }

        // Check if it has subprojects
        const subProjects = getSubProjects(projectDir);
        if (subProjects.length > 0) {
            return {
                name: projectName,
                subProjects: subProjects.map(sub => ({
                    name: sub,
                    path: `/projects/${projectName}/${sub}`,
                    contentPath: `/projects/${projectName}/${sub}/index.html`
                })),
                type: 'directory'
            };
        }
        
        // If it has an index.html at root
        if (fs.existsSync(path.join(projectDir, 'index.html'))) {
            return {
                name: projectName,
                path: `/projects/${projectName}`,
                contentPath: `/projects/${projectName}/index.html`,
                type: 'file'
            };
        }

        // If we get here, no valid project structure was found
        throw error(404, {
            message: `Invalid project structure for ${projectName}`
        });

    } catch (err) {
        // If it's already a SvelteKit error, rethrow it
        if (err && typeof err === 'object' && 'status' in err) {
            throw err;
        }
        
        // Log unexpected errors
        console.error('Error loading project:', err);
        
        // Throw a generic 500 error for unexpected errors
        throw error(500, {
            message: 'Internal server error while loading project'
        });
    }
} 