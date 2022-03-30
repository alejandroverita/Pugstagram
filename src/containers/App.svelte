<script>
    import { onMount } from "svelte";
    import Header from '../components/Header.svelte';
    import Main from '../components/Main.svelte';
    import TimeLine from '../components/TimeLine.svelte';
    import Sidebar from '../components/Sidebar.svelte';

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
<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    
    :global(:root){
        --light-theme-body-background: #ebedf0;
        --dark-theme-body-background: #1c1e21;
        --white-color: #fff;
        --black-color: #000;
        --gray-color: rgb(38, 38, 38);
        --gray-alpha-80: rgba(38, 38, 38, 0.8);
        --dark-parts-color: #242526;
    }

    :global(body){
        background-color: #fafafa;
        color: var(--gray-alpha-80);
        font-family: "Lato", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :global(h1, h2, h3){
        /* color: var(--black-color); */
        margin: 0;
        padding: 0;
    }

    :global(body.dark){
        background-color: var(--dark-theme-body-background);
        color: var(--white-color);
    }

    :global(a){
        text-decoration: none;
        /* color: var(--light-texts-color) */
    }

    :global(a):active {
        color: var(--gray-alpha-80)
    }
</style>

<Header />
<Main>
    <TimeLine posts = { data.posts} />
    <Sidebar {...data.user}/>
</Main>