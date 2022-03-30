<script>
    import Card from './Card.svelte';
    import Loading from './Loading.svelte';
    import { isDarkMode } from "../store/store.js";

    export let posts = [];
</script>


<style>
    #TimeLine {
        max-width: 642px;
        width: 100%;
        /* padding: 4em 0 0 0; */
        grid-area: timeline;
        justify-self: center;
    }

    .loader {
        width: 40px;
        height: 40px;
        margin: 100px auto;
        background-color: rgba(51, 51, 51, 0.6);
        border-radius: 100%;
        animation: scale-out 1s ease-in-out infinite alternate
    }

    @keyframes scale-out{
        0%{
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    .loader-dark {
        background-color: rgba(204, 204, 204, 0.6);
    }

    @media(max-width:99px) {
        /* #TimeLine {
            margin: 0 auto;
        } */
    }
</style>

<div id="TimeLine">
    <div class="TimeLine-container">
        {#each posts as post}
            <Card {...post} />
        {:else}
            <div class="loader" class:loader-dark={$isDarkMode}></div>
            <Loading />
        {/each}
    </div>
</div>