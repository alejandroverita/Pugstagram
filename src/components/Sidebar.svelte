<script>
    import Profile from './Profile.svelte';
    import Stories from './Stories.svelte';
    import Footer from './Footer.svelte';

    export let nickname;
    export let name;
</script>

<style>
    #Sidebar{
        position: relative;
        padding: 4.5em 0 0 0;
        grid-area: stories;
    }

    .Sidebar-container {
        display: grid;
        grid-template-rows: auto 1 fr auto;
        gap: 20px;
        position: fixed;
        max-width: 290px;
        width: 100%;
    }

    @media(max-width: 999px){
        .Sidebar-container{
            position: static;
            margin: 0 auto;
        }
    }

</style>

<div id="Sidebar">
    <div class="Sidebar-container">
        <Profile {nickname} {name}/>
        <Stories />
        <Footer />
    </div>
</div>