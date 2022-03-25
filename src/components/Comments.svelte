<style>
    .Comments-content{
        padding: 0 1em 0.5em 1em;
    }

    .Comments-users {
        display: flex;
        margin: 0 0 0.5em 0;
    }

    .Comments-users h3 {
        font-size: 14px;
        color: black;
        font-weight: bold;
    }

    .Comments-users span {
        font-size: 14px;
        margin: 0 0 0 0.5em;
        color: rgba(black, 0.9);
        font-weight: normal;
    }

    .Comments-add {
        padding: 1em 1em 1em 1em;
        border-top: 1px solid rgba(219, 219, 219, 0.8);
    }

    .Comments-add form {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Comments-add input {
        display: flex;
        border: solid 1px #e9e9e9;
        border-radius: 5px;
        color: #696969;
        font-size: 12px;
        outline: none;
        width: 100%;

    }

    .Comments-add button {
        border: none;
        color: #3897f0;
        font-size: 12px;
        outline: none;
        cursor: pointer;
        background-color: transparent;
    }

    /* label {
        display: none;
    } */
</style>

<div id="Comments">
    <div class="Comments-content">
        <div class="Comments-users">
            <h3>Crispeta</h3>
            <span>Hola Elmo! </span>
        </div>
        <div class="Comments-add">
            <form>
                <input type="text"
                    class="Comments-input"
                    placeholder="Agregar comentario..."
                    id="text"
                />
                <button type="submit">Post</button>
            </form>
        </div>
    </div>
</div>