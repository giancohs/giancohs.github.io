import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const projectName = params.project;
    
    return {
        name: projectName,
        contentPath: `/projects/${projectName}/index.html`,
        type: 'file'
    };
}) satisfies PageServerLoad; 