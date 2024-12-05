import { error } from '@sveltejs/kit';
import { dev } from '$app/environment';
import fs from 'node:fs';
import path from 'node:path';

export async function load({ params }) {
    try {
        const projectPath = path.join(
            process.cwd(), 
            dev ? 'static' : 'build', 
            'projects', 
            params.project
        );

        // Check if project directory exists
        if (!fs.existsSync(projectPath)) {
            throw error(404, 'Project not found');
        }

        // Check if index.html exists
        const indexPath = path.join(projectPath, 'index.html');
        if (!fs.existsSync(indexPath)) {
            throw error(404, 'Project index not found');
        }

        // Return the project data
        return {
            name: params.project,
            path: `/projects/${params.project}/index.html`
        };
    } catch (err) {
        console.error('Error loading project:', err);
        throw error(404, 'Project not found');
    }
} 