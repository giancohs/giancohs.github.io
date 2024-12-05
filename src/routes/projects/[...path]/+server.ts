import { error } from '@sveltejs/kit';
import fs from 'node:fs';
import path from 'node:path';

export async function GET({ params }) {
    try {
        const filePath = path.join(process.cwd(), 'static', 'projects', params.path);
        
        if (!fs.existsSync(filePath)) {
            throw error(404, 'File not found');
        }

        const content = fs.readFileSync(filePath);
        return new Response(content);
    } catch {
        throw error(404, 'File not found');
    }
} 