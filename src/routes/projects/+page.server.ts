import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

export async function load() {
    try {
        const projectsPath = path.resolve(process.cwd(), 'static', 'projects');
        
        if (!fs.existsSync(projectsPath)) {
            console.error('Directory not found:', projectsPath);
            return { projects: [] };
        }

        const projects = fs.readdirSync(projectsPath)
            .filter(file => fs.statSync(path.join(projectsPath, file)).isDirectory());

        return { projects };
    } catch (err) {
        console.error('Error loading projects:', err);
        return { projects: [] };
    }
} 