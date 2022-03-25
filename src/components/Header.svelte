<style>
    #Header{
        background: white;
        position: fixed;
        width: 100%;
    }

    .Header-container{
        display: grid;
        grid-template-columns: minmax(auto, 936px);
        justify-content: center;
        border-bottom: 1px solid rgba(38, 38, 38, 0.4);
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
        color: rgba(38, 38, 38, 0.7);
        cursor: pointer;
    }

    .Header-logo h1 {
        display: inline-block;
        font-size: 28px;
        color: black;
        font-family: "Pacifico", cursive;
        cursor: pointer;
        position: relative;
        background-color: #fff;
        mix-blend-mode: multiply;
    }

    .Header-logo h1:before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at top left, #f09433, #bc1888);
        mix-blend-mode: screen;
        position: absolute;
        top: 0;
        left: 0;
    }
    
</style>

<div id="Header">
    <div class="Header-container">
        <div class="Header-content">
            <div class="Header-logo">
                <h1>Pugstagram</h1>
            </div>
            <div class="Header-nav">
                <ul>
                    <li>
                        <i class="fa-solid fa-heart"/>
                    </li>
                    <li>
                        <i class="fa-solid fa-user"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>