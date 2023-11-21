import './assets/js/script.js'
const app:any = document.querySelector("#app");

window.onload = function(e) {
    app.innerHTML =  `
    <div class="container">
        <div class="inner">
            <div class="card">
                <img src="./assets/images/dev-code.png" />
                <br>
                <h2>This is my development server!</h2>
                <br>
                <p>The environment uses webpack and babel to provide extensive features like JS complete support and development server with transpilation.</p>
            </div>
        </div>
    </div>`;
    console.log("loaded!")
}
