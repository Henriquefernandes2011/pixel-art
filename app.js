const cor = document.querySelector("input");
const butlimp = document.querySelector(".butlimpar");
const divgrade = document.querySelector(".grade");

for (let i = 0; i < 400; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("click", function() {
        pixel.style.backgroundColor = cor.value;
    });
    divgrade.appendChild(pixel);
}

function limparGrade() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(function (pixel) {
        pixel.style.backgroundColor = "rgb(14, 94, 114)";
    })
};

butlimp.addEventListener("click", limparGrade)