import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

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
            if (fs.existsSync(path.join(fullPath, 'index.html'))) {
                return {
                    name: subPath,
                    path: `/projects/${projectName}/${subPath}`,
                    contentPath: `/projects/${projectName}/${subPath}/index.html`,
                    parentName: projectName,
                    type: 'file'
                };
            }
        }

        // If the project directory exists
        if (fs.existsSync(projectDir)) {
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
        }

        throw new Error('Project not found');
    } catch (err) {
        console.error('Error loading project:', err);
        throw new Error('Project not found');
    }
} 