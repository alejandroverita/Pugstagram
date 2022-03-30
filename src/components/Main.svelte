<style>
    #Main {
        display: grid;
        grid-template-columns: minmax(auto, 936px);
        justify-content: center;
    }

    .Main-container{
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 2em;
        padding: 2em 0;
    }

    @media(max-width: 999px){
        .Main-container{
            grid-template: auto 1fr / 1fr;
            
        }
    }

</style>

<div id="Main">
    <div class="Main-container">
        <slot />
    </div>
</div>