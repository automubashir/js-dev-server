import './assets/js/script.js'
const app:any = document.querySelector("#app");

window.onload = function(e) {
    app.innerHTML =  `
    <div class="container">
        <div class="inner">
            <div class="card">
                <img src="./assets/images/dev-code.png" />
                <br>
                <h2>JS Development Server</h2>
                <br>
                <p>a simple environment powered by JavaScript (webpack and babel) provides extensive development server with transpilation, bundling, hot reloading, and complete JS-support.</p>
            </div>
        </div>
    </div>`;
    console.log("loaded!")
}
