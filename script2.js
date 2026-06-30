/* FUNCIÓN DE ALERTA (FORMULARIO ENVIADO CON EXITO) && FUNCIÓN MANEJADORA DE DATOS DEL FORMULARIO -------------------- */

const formulario = document.getElementById("formulario");
let usuario = [];

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    try {

        function ValidarRespuesta(a) {
            if (a === "" || a === null) {
                throw new Error("Error en la inserción de datos, por favor complete TODOS los datos solicitados.");
            }
        }

        function SeleccionarRadioButton(array) {
            for (const e of array) {
                if (e.checked) {
                    return e.value;
                }
            }
            return null;
        }

        const nombre = document.getElementById("inputNombre").value;
        const email = document.getElementById("inputEmail").value;
        const contrasenia = document.getElementById("inptContrasenia").value;
        const objetivo = document.getElementById("inputObjetivo").value;
        const region = SeleccionarRadioButton(document.querySelectorAll(".inputReg"));
        const tipoCoach = SeleccionarRadioButton(document.querySelectorAll(".inputTipoCoach"));
        const coach = SeleccionarRadioButton(document.querySelectorAll(".inputCoach"));

        ValidarRespuesta(nombre);
        ValidarRespuesta(email);
        ValidarRespuesta(contrasenia);
        ValidarRespuesta(region);
        ValidarRespuesta(tipoCoach);
        ValidarRespuesta(coach);
        ValidarRespuesta(objetivo);

        usuario = [];

        usuario.push(nombre);
        usuario.push(email);
        usuario.push(contrasenia);
        usuario.push(region);
        usuario.push(tipoCoach);
        usuario.push(coach);
        usuario.push(objetivo);

        alert(
            "Confirme que los datos ingresados son correctos.\n\n" +
            "Nombre de usuario: " + usuario[0] + "\n" +
            "Email: " + usuario[1] + "\n" +
            "Contraseña: " + usuario[2] + "\n" +
            "Región: " + usuario[3] + "\n" +
            "Modalidad de Coach: " + usuario[4] + "\n" +
            "Coach seleccionado: " + usuario[5] + "\n" +
            "Objetivo a alcanzar: " + usuario[6]
        );

        alert("Formulario enviado con éxito");

        formulario.submit();

    } catch (e) {

        alert(e.message);

    }

});
