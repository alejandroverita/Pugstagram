<style>
    #Main {
        display: grid;
        grid-template-columns: minmax(auto, 936px);
        justify-content: center;
    }

    .Main-container{
        display: grid;
        grid-template-columns: minmax(auto, 642px) minmax(auto, 293px);
        grid-gap: 28px;
        padding: 2em 0;
        grid-template-areas: "timeline stories"
    }

    @media(max-width: 999px){
        .Main-container{
            grid-template: auto 1fr / 1fr;
            grid-template-areas:
                "stories"
                "timeline";
        }
    }

</style>

<div id="Main">
    <div class="Main-container">
        <slot />
    </div>
</div>