<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	let { children } = $props();
    
    let darkMode = $state(false);
    
    onMount(() => {
        // Check if dark mode was previously set
        const isDark = localStorage.getItem('darkMode') === 'dark' || 
                      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        // Set initial state
        darkMode = isDark;
        updateTheme(isDark);
    });
    
    function updateTheme(isDark: boolean) {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
    
    function handleDarkMode() {
        darkMode = !darkMode;
        updateTheme(darkMode);
        localStorage.setItem('darkMode', darkMode ? 'dark' : 'light');
    }
</script>

<style>
    /* Always show scrollbar to prevent layout shifts */
    :global(html) {
        overflow-y: scroll;
    }
    
    /* Optional: Style the scrollbar for better appearance */
    :global(::-webkit-scrollbar) {
        width: 8px;
    }
    
    :global(::-webkit-scrollbar-track) {
        background: transparent;
    }
    
    :global(::-webkit-scrollbar-thumb) {
        background-color: rgba(156, 163, 175, 0.5);
        border-radius: 4px;
    }
</style>

<div class="fixed inset-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
    <nav class="absolute top-0 w-full bg-white dark:bg-gray-800 shadow-md transition-colors duration-200 z-10">
        <div class="max-w-6xl mx-auto px-4 py-3">
            <div class="flex justify-between items-center">
                <a href="/" class="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    HeavyDirtyData
                </a>
                <div class="flex items-center gap-6">
                    <a href="/" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Home
                    </a>
                    <a href="/projects" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Projects
                    </a>
                    <button 
                        onclick={handleDarkMode}
                        class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {#if darkMode}
                            🌞
                        {:else}
                            🌙
                        {/if}
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <main class="absolute top-14 bottom-0 w-full overflow-auto">
        {@render children()}
    </main>
</div>
