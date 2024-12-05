import { json } from '@sveltejs/kit';
import fs from 'node:fs';
import path from 'node:path';

export async function GET() {
    try {
        const projectsPath = path.join(process.cwd(), 'static', 'projects');
        
        const projects = fs.readdirSync(projectsPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        return json({ projects });
    } catch (err) {
        console.error('Error reading projects directory:', err);
        return json({ projects: [] }, { status: 500 });
    }
} 