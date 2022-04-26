<script>
    import Main from '../components/Main.svelte';
    export let status;
    export let error;

    const dev = process.env.NODE_ENV === 'development';
</script>

<style>
    .Error {
        padding: 4em 0 0 0;
    }

    p { 
        margin: 0 auto;
    }

    h1 {
        font-size: 2.8em;
        font-weight: 700;
        margin: 0 0 0.5em;
    }
</style>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<Main>
    <div class="Error">
        <h1>{status}</h1>
        <p>{error.message}</p>
        {#if dev && error.stack}
            <p> {error.stack} </p>
        {/if}
    </div>
</Main>