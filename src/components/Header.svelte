<script>
    import {goto} from "@sapper/app";
    import { likeCount } from '../store/store';
    import { isDarkMode } from "../store/store";
    export let segment;

    const navigateHome = async () => {
        await goto('/')
    };
</script>
<style>
    .Header{
        background-color: var(--white-color);
        position: fixed;
        width: 100%;
        height: 53px;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        z-index: 1;
        padding: 10px 0;
        border-bottom: 1px solid var(--gray-alpha-80);
    }

    .header-dark{
        background-color: var(--dark-parts-color);
        border-bottom: 1px solid #404040;
    }

    .Header-container{
        display: grid;
        grid-template-columns: minmax(auto, 936px);
        justify-content: center;
        align-items: center;
        /* padding: 0 20px; */
        
    }

    .Header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5em;
    }

    .Header-nav ul {
        list-style: none;
    }

    .Header-nav li {
        display: inline-block;
        margin: 0 0 0 1em;
    }

    .Header-nav i {
        font-size: 16px;
        /* color: rgba(38, 38, 38, 0.7); */
        cursor: pointer;
    }

    .Header-logo-text {
        font-size: 28px;
        font-family: "Pacifico", cursive;
        cursor: pointer;
        position: relative;
        /* background: radial-gradient(circle at top left, #f09433, #bc1888); */
        color: #000;
        mix-blend-mode: multiply;
        /* -webkit-background-clip: text; */
        /* -webkit-text-fill-color: transparent; */
    }

    .Header-logo-text:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        /* background: radial-gradient(circle at top left, #f09433, #bc1888); */
        mix-blend-mode: screen;
        position: absolute;
        top: 0;
        left: 0;
    }

    [aria-current] i {
        color: #bc1888;
    }
    
</style>

<div class="Header" class:header-dark={$isDarkMode}>
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <h1 on:click= {navigateHome} class="Header-logo-text">Pugstagram</h1>
            </div>

            <div class="Header-nav">
                <ul>
                    <li>
                        <i class="fa-solid fa-heart"/>
                        {$likeCount === 0 ? '' : $likeCount}
                    </li>
                    <li>
                        <a 
                        aria-current={segment === 'profile' ? 'page' : undefined } href='profile'
                        rel="prefetch"
                        >
                            <i class="fa-solid fa-user"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>