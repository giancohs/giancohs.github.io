<script lang="ts">
    export let data: {
        name: string;
        path?: string;
        contentPath?: string;
        parentName?: string;
        subProjects?: Array<{ name: string; path: string; contentPath: string }>;
        type: 'file' | 'directory';
    };

    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    
    let isFullscreen = false;

    // Function to format the title
    function formatTitle(text: string) {
        return text.replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    function toggleFullscreen() {
        if (!browser) return;
        isFullscreen = !isFullscreen;
        document.body.classList.toggle('fullscreen-mode');
    }

    // Handle keyboard shortcuts
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && isFullscreen) {
            toggleFullscreen();
        }
    }

    onMount(() => {
        if (!browser) return;
        
        // Only auto-enable fullscreen for file views, not directories
        if (data.type === 'file') {
            isFullscreen = true;
            document.body.classList.add('fullscreen-mode');
        }
        
        document.addEventListener('keydown', handleKeydown);
    });

    onDestroy(() => {
        if (!browser) return;
        
        // Clean up fullscreen mode when component is destroyed
        if (document.body.classList.contains('fullscreen-mode')) {
            document.body.classList.remove('fullscreen-mode');
        }
        document.removeEventListener('keydown', handleKeydown);
    });
</script>

<svelte:head>
    <title>{formatTitle(data.name)} - Project View</title>
</svelte:head>

<div class="h-full {isFullscreen ? 'fullscreen-mode' : ''}">
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
        <div class="h-full flex flex-col relative">
            <div class="bg-white dark:bg-gray-800 shadow-md p-4 transition-transform duration-300 absolute w-full {isFullscreen ? 'header-hidden' : ''}" id="project-header">
                <div class="max-w-6xl mx-auto">
                    <h1 class="text-xl font-bold text-gray-800 dark:text-white">
                        {#if data.parentName}
                            <span class="text-gray-500">{formatTitle(data.parentName)} / </span>
                        {/if}
                        {formatTitle(data.name)}
                    </h1>
                </div>
            </div>
            <button 
                on:click={toggleFullscreen}
                class="fixed top-4 right-4 z-50 bg-gray-800/80 dark:bg-gray-700/80 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 backdrop-blur-sm"
                title={isFullscreen ? "Exit Fullscreen (Press Esc)" : "Enter Fullscreen"}
            >
                {#if isFullscreen}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v4m16-4v4M4 20v-4m16 4v-4" />
                    </svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                {/if}
            </button>
            <div class="flex-1 h-full {isFullscreen ? '' : 'pt-14'}">
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

<style>
    :global(body.fullscreen-mode) {
        overflow: hidden;
    }
    
    :global(body.fullscreen-mode nav),
    :global(body.fullscreen-mode header) {
        transform: translateY(-100%) !important;
        transition: transform 0.3s ease-in-out !important;
    }

    .fullscreen-mode {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        z-index: 9999 !important;
        background: white;
        transition: all 0.3s ease-in-out !important;
    }

    .fullscreen-mode iframe {
        height: 100vh !important;
    }

    button {
        opacity: 0.6;
        transform: scale(0.9);
    }

    button:hover {
        opacity: 1;
        transform: scale(1);
    }

    .header-hidden {
        transform: translateY(-100%);
    }

    #project-header {
        top: 0;
        left: 0;
        z-index: 40;
        height: 3.5rem;
    }
</style> 