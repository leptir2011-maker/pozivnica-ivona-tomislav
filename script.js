window.onload = function () {

    // Zlatne iskrice
    const container = document.getElementById("particles");

    for (let i = 0; i < 60; i++) {

        let p = document.createElement("div");

        p.style.position = "fixed";
        p.style.width = "4px";
        p.style.height = "4px";
        p.style.background = "#d4af37";
        p.style.borderRadius = "50%";
        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";
        p.style.opacity = Math.random();
        p.style.animation =
            "sparkle " +
            (3 + Math.random() * 6) +
            "s infinite";

        container.appendChild(p);

    }

    // Odbrojavanje

    const cilj = new Date("September 4, 2026 19:00:00").getTime();

    const timer = document.createElement("h2");

    timer.style.marginTop = "40px";

    document.getElementById("pozivnica").appendChild(timer);

    setInterval(function () {

        let sada = new Date().getTime();

        let razlika = cilj - sada;

        let d = Math.floor(razlika / (1000 * 60 * 60 * 24));

        let h = Math.floor((razlika % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        let m = Math.floor((razlika % (1000 * 60 * 60)) / (1000 * 60));

        timer.innerHTML =
            "Još " + d + " dana " + h + " sati " + m + " minuta";

    }, 1000);

}
