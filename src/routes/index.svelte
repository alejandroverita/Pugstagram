<script>
    import Main from '../components/Main.svelte';
    import TimeLine from '../components/TimeLine.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    
    import { onMount } from "svelte";
    import { isDarkMode } from "../store/store";

    let data = {};
    const API = "https://api-pugstagram.herokuapp.com/?nickname=alejandroverita&name=Alejandro%20Vera"

    onMount(async () => {
        const response = await fetch(API)
        data = await response.json();
    });

    isDarkMode.subscribe(value => {
        value 
            ? document.body.classList.add("dark")
            : document.body.classList.remove("dark");
    })

</script>


<Main>
    <TimeLine posts = { data.posts} />
    {#if data.user}
        <Sidebar {...data.user}/>
    {/if}
</Main>