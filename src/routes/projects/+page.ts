import { dev } from '$app/environment';

export const prerender = true;

export async function load() {
    // In dev, we'll fetch from the server
    if (dev) {
        const response = await fetch('/api/projects');
        const data = await response.json();
        return data;
    }
    
    // In production, we'll use the prerendered data
    return {
        projects: [
            // List your projects manually here
            'project-one',
            'project-two',
            // etc...
        ]
    };
} 