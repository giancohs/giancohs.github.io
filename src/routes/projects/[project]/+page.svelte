<script lang="ts">
    export let data: {
        name: string;
        path?: string;
        contentPath?: string;
        parentName?: string;
        subProjects?: Array<{ name: string; path: string; contentPath: string }>;
        type: 'file' | 'directory';
    };

    // Function to format the title
    function formatTitle(text: string) {
        return text.replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
</script>

<div class="h-full">
    {#if data.type === 'directory'}
        <div class="max-w-6xl mx-auto px-4 py-8">
            <h2 class="text-2xl font-bold mb-6">
                {formatTitle(data.name)}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each data.subProjects || [] as subProject}
                    <a 
                        href={subProject.contentPath}
                        class="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all"
                    >
                        <h3 class="text-xl font-semibold mb-2">
                            {formatTitle(subProject.name)}
                        </h3>
                        <span class="text-blue-600 dark:text-blue-400">View Project →</span>
                    </a>
                {/each}
            </div>
        </div>
    {:else}
        <div class="h-full flex flex-col">
            <div class="bg-white dark:bg-gray-800 shadow-md p-4">
                <div class="max-w-6xl mx-auto">
                    <h1 class="text-xl font-bold text-gray-800 dark:text-white">
                        {#if data.parentName}
                            <span class="text-gray-500">{formatTitle(data.parentName)} / </span>
                        {/if}
                        {formatTitle(data.name)}
                    </h1>
                </div>
            </div>
            <div class="flex-1">
                <iframe 
                    src={data.contentPath}
                    title={data.name}
                    class="w-full h-full border-0"
                >
                </iframe>
            </div>
        </div>
    {/if}
</div> 