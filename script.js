const btnDesplegarReplegarAnuncio = document.getElementById("btn_desplegar-replegar_anuncio");
const publicidadIndividual = document.querySelectorAll(".publicidad-individual");
const espacioPublicidad = document.querySelector(".espacio-publicidad");
btnDesplegarReplegarAnuncio.addEventListener("click", DesplegarReplegarAnuncio);

function DesplegarReplegarAnuncio() {
    if (btnDesplegarReplegarAnuncio.textContent === "⬅️") {
        btnDesplegarReplegarAnuncio.textContent = "➡️";
        espacioPublicidad.style.width = "50px";
        publicidadIndividual.forEach(anuncio => {
            anuncio.style.display = "none";
            anuncio.style.userSelect = "none";
        })
    }else {
        btnDesplegarReplegarAnuncio.textContent = "⬅️";
        espacioPublicidad.style.width = "100%";
        publicidadIndividual.forEach(anuncio => {
            anuncio.style.display = "block";
            // anuncio.style.userSelect = "auto";
        })
    }
    };