<script lang="ts">
    export let data: {
        name: string;
        path: string;
    };
</script>

<div class="h-full">
    <iframe 
        src={data.path} 
        title={data.name}
        class="w-full h-full border-0"
    >
    </iframe>
</div> 