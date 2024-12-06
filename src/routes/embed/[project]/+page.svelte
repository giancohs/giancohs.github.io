<script lang="ts">
    export let data: {
        name: string;
        path?: string;
        contentPath?: string;
        type: 'file' | 'directory';
    };
</script>

{#if data.type === 'file' && data.contentPath}
    <div class="embed-container">
        <iframe 
            src={data.contentPath}
            title={data.name}
            class="embed-frame"
        >
        </iframe>
    </div>
{/if}

<style>
    .embed-container {
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    .embed-frame {
        width: 100%;
        height: 100%;
        border: 0;
        margin: 0;
        padding: 0;
    }

    :global(body) {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style> 