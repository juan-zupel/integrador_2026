/* FUNCIÓN DE DESPLIEGE/REPLIEGE DEL ESPACIO PUBLICITARIO ------------------------------------------------------------------- */

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
        espacioPublicidad.style.width = "180px";
        publicidadIndividual.forEach(anuncio => {
            anuncio.style.display = "block";
            // anuncio.style.userSelect = "auto";
        })
    }
    };


/* FUNCIÓN DE DESPLIEGE/REPLIEGE DE TUTORIALES ------------------------------------------------------------------------------ */
// Esta sección del codigo es bastante repetitiva pero a falta de onclicks no se me ocurrió nada mejor :P

const btnDesplegarReplegarTutoriales_1 = document.getElementById("btn-desp/rep-tuto-1");
const segmentoGuia_1 = document.getElementById("segmento-guia-1");
const segmento_1 = document.querySelectorAll(".segmento-1");
const tituloSegmento_1 = document.getElementById("titulo-segmento-1");
btnDesplegarReplegarTutoriales_1.addEventListener("click", DesplegarReplegarTutorial_1);

function DesplegarReplegarTutorial_1() {
    if (btnDesplegarReplegarTutoriales_1.textContent !== "⬆️") {
        btnDesplegarReplegarTutoriales_1.textContent = "⬆️";
        tituloSegmento_1.style.display = "block";
        segmentoGuia_1.style.height = "auto";
        segmento_1.forEach(seg => {
            seg.style.display = "block";
        });
    }else {
        btnDesplegarReplegarTutoriales_1.textContent = "⬇️";
        tituloSegmento_1.style.display = "none";
        segmentoGuia_1.style.height = "40px";
        segmento_1.forEach(seg => {
            seg.style.display = "none";
        });
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const btnDesplegarReplegarTutoriales_2 = document.getElementById("btn-desp/rep-tuto-2");
const segmentoGuia_2 = document.getElementById("segmento-guia-2");
const segmento_2 = document.querySelectorAll(".segmento-2");
const tituloSegmento_2 = document.getElementById("titulo-segmento-2");
btnDesplegarReplegarTutoriales_2.addEventListener("click", DesplegarReplegarTutorial_2);

function DesplegarReplegarTutorial_2() {
    if (btnDesplegarReplegarTutoriales_2.textContent !== "⬆️") {
        btnDesplegarReplegarTutoriales_2.textContent = "⬆️";
        tituloSegmento_2.style.display = "block";
        segmentoGuia_2.style.height = "auto";
        segmento_2.forEach(seg => {
            seg.style.display = "block";
        });
    }else {
        btnDesplegarReplegarTutoriales_2.textContent = "⬇️";
        tituloSegmento_2.style.display = "none";
        segmentoGuia_2.style.height = "40px";
        segmento_2.forEach(seg => {
            seg.style.display = "none";
        });
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const btnDesplegarReplegarTutoriales_3 = document.getElementById("btn-desp/rep-tuto-3");
const segmentoGuia_3 = document.getElementById("segmento-guia-3");
const segmento_3 = document.querySelectorAll(".segmento-3");
const tituloSegmento_3 = document.getElementById("titulo-segmento-3");
btnDesplegarReplegarTutoriales_3.addEventListener("click", DesplegarReplegarTutorial_3);

function DesplegarReplegarTutorial_3() {
    if (btnDesplegarReplegarTutoriales_3.textContent !== "⬆️") {
        btnDesplegarReplegarTutoriales_3.textContent = "⬆️";
        tituloSegmento_3.style.display = "block";
        segmentoGuia_3.style.height = "auto";
        segmento_3.forEach(seg => {
            seg.style.display = "block";
        });
    }else {
        btnDesplegarReplegarTutoriales_3.textContent = "⬇️";
        tituloSegmento_3.style.display = "none";
        segmentoGuia_3.style.height = "40px";
        segmento_3.forEach(seg => {
            seg.style.display = "none";
        });
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const btnDesplegarReplegarTutoriales_4 = document.getElementById("btn-desp/rep-tuto-4");
const segmentoGuia_4 = document.getElementById("segmento-guia-4");
const segmento_4 = document.querySelectorAll(".segmento-4");
const tituloSegmento_4 = document.getElementById("titulo-segmento-4");
btnDesplegarReplegarTutoriales_4.addEventListener("click", DesplegarReplegarTutorial_4);

function DesplegarReplegarTutorial_4() {
    if (btnDesplegarReplegarTutoriales_4.textContent !== "⬆️") {
        btnDesplegarReplegarTutoriales_4.textContent = "⬆️";
        tituloSegmento_4.style.display = "block";
        segmentoGuia_4.style.height = "auto";
        segmento_4.forEach(seg => {
            seg.style.display = "block";
        });
    }else {
        btnDesplegarReplegarTutoriales_4.textContent = "⬇️";
        tituloSegmento_4.style.display = "none";
        segmentoGuia_4.style.height = "40px";
        segmento_4.forEach(seg => {
            seg.style.display = "none";
        });
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const btnDesplegarReplegarTutoriales_5 = document.getElementById("btn-desp/rep-tuto-5");
const segmentoGuia_5 = document.getElementById("segmento-guia-5");
const segmento_5 = document.querySelectorAll(".segmento-5");
const tituloSegmento_5 = document.getElementById("titulo-segmento-5");
btnDesplegarReplegarTutoriales_5.addEventListener("click", DesplegarReplegarTutorial_5);

function DesplegarReplegarTutorial_5() {
    if (btnDesplegarReplegarTutoriales_5.textContent !== "⬆️") {
        btnDesplegarReplegarTutoriales_5.textContent = "⬆️";
        tituloSegmento_5.style.display = "block";
        segmentoGuia_5.style.height = "auto";
        segmento_5.forEach(seg => {
            seg.style.display = "block";
        });
    }else {
        btnDesplegarReplegarTutoriales_5.textContent = "⬇️";
        tituloSegmento_5.style.display = "none";
        segmentoGuia_5.style.height = "40px";
        segmento_5.forEach(seg => {
            seg.style.display = "none";
        });
    }
}

/* FUNCIÓN DE FILTRADO DE TUTORIALES POR CAMPEON ----------------------------------------------------------------------------- */

const titulos = document.querySelectorAll(".titulo-segmento");
const select = document.getElementById("select_busqueda_avanzada");


document.addEventListener("DOMContentLoaded", function () {
    CargarBusquedaAvanzada();
});

function CargarBusquedaAvanzada() {
    
    let medidor = 1;
    titulos.forEach(t => {
        select.options[medidor].text = t.textContent;
        select.options[medidor].value = t.id;
        medidor ++;
    })
}

const btnBusquedaAvanzada = document.getElementById("btn_busqueda_avanzada");
btnBusquedaAvanzada.addEventListener("click", function() {
    DesplegarTutoriales();
    BuscarTutorial();
});

function DesplegarTutoriales() {
    if (btnDesplegarReplegarTutoriales_1.textContent !== "⬆️") {
        DesplegarReplegarTutorial_1();
    }
    
    if (btnDesplegarReplegarTutoriales_2.textContent !== "⬆️") {
        DesplegarReplegarTutorial_2();
    }
    
    if (btnDesplegarReplegarTutoriales_3.textContent !== "⬆️") {
        DesplegarReplegarTutorial_3();
    }
    
    if (btnDesplegarReplegarTutoriales_4.textContent !== "⬆️") {
        DesplegarReplegarTutorial_4();
    }
    
    if (btnDesplegarReplegarTutoriales_5.textContent !== "⬆️") {
        DesplegarReplegarTutorial_5();
    }
}

function BuscarTutorial() {
    location.hash = select.value;
}

/* FUNCIÓN DE FILTRADO DE TUTORIALES POR CAMPEON ----------------------------------------------------------------------------- */


btnBusquedaAvanzada.addEventListener("mouseover", function() {
    btnBusquedaAvanzada.style.transition = "transform 1s ease";
    btnBusquedaAvanzada.style.transform = "scale(1.1)";
});
btnBusquedaAvanzada.addEventListener("mouseout", function() {
    btnBusquedaAvanzada.style.transition = "transform 1s ease";
    btnBusquedaAvanzada.style.transform = "scale(1)";
});
