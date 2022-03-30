<script>
    import { isDarkMode } from "../store/store.js";
    
    export let nickname;
    export let name;

    const changeMode = () => ($isDarkMode = !$isDarkMode);
</script>
<style>

    #Profile{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
    }

    .Profile-content {
        display: flex;
    }

    .Profile-avatar img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }

    .Profile-info{
        margin: 0 0 0 0.5em;
    }

    .Profile-info h2 {
        font-size: 14px;
    }

    .Profile-info span {
        font-size: 12px;
        font-weight: normal;
    }

    .Profile-switch {
        display: flex;
        background: linear-gradient(to right, #4ee8f3, #270e47);
        border-radius: 100px;
        position: relative;
        border: none;
        cursor: pointer;
        padding: 0;
    }

    .Profile-switch:after{
        content: "";
        width: 30px;
        height: 30px;
        border-radius: 100px;
        background-color: var(--white-color);
        position: absolute;
        left: 0;
        box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
        transition: transform linear .3s;
    }

    .Profile-switch.active:after{
        transform: translateX(30px);
    }

    .Profile-icon{
        width: 30px;
        height: 30px;
        line-height: 30px;
        color: var(--white-color)
    }
</style>

<div id="Profile">
    <div class="Profile-content">
        <div class="Profile-avatar">
            <img src="https://arepa.s3.amazonaws.com/oscar.png" alt="">
        </div>
        <div class="Profile-info">
            <h2>{nickname}</h2>
            <span>{name}</span>
        </div>
    </div>
    <button
        class="Profile-switch"
        class:active={$isDarkMode}
        on:click={changeMode}
    >
        <i class = "fas fa-sun Profile-icon"/>
        <i class = "fas fa-moon Profile-icon"/>
    </button>
</div>