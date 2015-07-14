function runLogo() {
    'use strict';
    setInterval(function () {
        var logo = String.fromCharCode(0x25A0 + Math.random() * (0x25FF - 0x25A0 + 1));
        document.getElementById("logo").innerHTML = logo;
        document.title = logo + " eric li";
    }, 400);
}

function run() {
    'use strict';
    document.getElementById("year").innerHTML = new Date().getFullYear();
    runLogo();

}