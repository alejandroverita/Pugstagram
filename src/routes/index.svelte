<script context="module">
    export async function preload(){
        let data = {};
        const response = await this.fetch(
            `https://api-pugstagram.herokuapp.com/?nickname=alejandroverita&name=Alejandro%20Vera`
        );

        data = await response.json();
        return {data};
    }
</script>

<script>
    import Main from '../components/Main.svelte';
    import TimeLine from '../components/TimeLine.svelte';
    import Sidebar from '../components/Sidebar.svelte';
    // import { isDarkMode } from "../store/store";
    export let data;


    // isDarkMode.subscribe(value => {
    //     value 
    //         ? document.body.classList.add("dark")
    //         : document.body.classList.remove("dark")
    // });
    

</script>


<Main>
    <TimeLine posts = { data.posts} />
    <Sidebar {...data.user}/>
</Main>