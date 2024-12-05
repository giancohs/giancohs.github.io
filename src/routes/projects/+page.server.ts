import { error } from '@sveltejs/kit';
import fs from 'node:fs';
import path from 'node:path';

export async function load() {
    try {
        const projectsPath = path.join(process.cwd(), 'static', 'projects');
        
        const projects = fs.readdirSync(projectsPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        return { projects };
    } catch (err) {
        console.error('Error reading projects directory:', err);
        throw error(500, 'Could not load projects');
    }
} 