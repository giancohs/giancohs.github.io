<script lang="ts">
    export let data: { 
        projects: string[]
    };

    $: hasProjects = Array.isArray(data.projects) && data.projects.length > 0;
</script>

<div class="max-w-6xl mx-auto px-4 py-8">
    {#if hasProjects}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each data.projects as project}
                <a 
                    href={`/projects/${project}`}
                    class="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all"
                >
                    <h2 class="text-xl font-semibold mb-2">
                        {project.replace(/-/g, ' ')
                            .split(' ')
                            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')}
                    </h2>
                    <span class="text-blue-600 dark:text-blue-400">View Project →</span>
                </a>
            {/each}
        </div>
    {:else}
        <div class="text-center py-12">
            <p class="text-gray-600 dark:text-gray-400">Loading projects...</p>
        </div>
    {/if}
</div> 