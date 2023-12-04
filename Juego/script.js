const wraps = document.querySelectorAll(".wrapp");
const ducks = document.querySelectorAll(".duck");
const wynik = document.querySelector("span");
const dlugoscGry = 8000;

let punkty = 0;
let ostatniaKaczka;

function czasWyswietlania() {
    let czas = Math.random();
    if (czas > 0.9 || czas < 0.3) return czasWyswietlania()
    return czas
}

function ktoraKaczka() {
    const duckNumber = Math.floor(Math.random() * ducks.length);
    if (ostatniaKaczka == duckNumber) {
        return ktoraKaczka()
    }
    ostatniaKaczka = duckNumber;
    return duckNumber;
}

setInterval(pojawianie, 400);

function znikanie(numer) {
    setTimeout(function () { wraps[numer].classList.remove("show") }, 400);
}

function pojawianie() {
    const kaczkaNumer = ktoraKaczka();
    console.log(kaczkaNumer);
    wraps[kaczkaNumer].classList.add("show");
    znikanie(kaczkaNumer);
}

wraps.forEach(function (wrap) {
    wrap.addEventListener("click", function () {
        if (this.classList.contains("show")) {
            this.classList.remove("show");
            punkty++;
            wynik.textContent = punkty;
        }
    })
});

ducks.forEach(function (duck) {
    duck.addEventListener("click", function () {
    })
});
