
$(document).ready(function () {

    $("#formulario").on("submit", function (event) {
        event.preventDefault();

        // Limpiar los mensajes anteriores
        $("[id^='error']").text("");
        $("#resultado").text("").removeClass("text-success text-danger");

        let valido = true;

        // Obtener los datos del formulario
        let nombre = $("#nombre").val().trim();
        let apellido = $("#apellido").val().trim();
        let telefono = $("#telefono").val().trim();
        let region = $("#region").val();
        let nacimiento = $("#nacimiento").val();
        let nivel = $("input[name='nivel']:checked").val();
        let carrera = $("#carrera").val();
        let mensaje = $("#mensaje").val().trim();

        // Validar nombre
        if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]{2,40}$/.test(nombre)) {
            $("#errorNombre").text(
                "Ingresa un nombre de 2 a 40 caracteres, solo con letras."
            );
            valido = false;
        }

        // Validar apellido
        if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü ]{2,40}$/.test(apellido)) {
            $("#errorApellido").text(
                "Ingresa un apellido de 2 a 40 caracteres, solo con letras."
            );
            valido = false;
        }

        // Validar teléfono
        if (!/^[0-9 +()-]{8,15}$/.test(telefono) ||
            !/[0-9]/.test(telefono)) {
            $("#errorTelefono").text(
                "Ingresa un teléfono válido de 8 a 15 caracteres."
            );
            valido = false;
        }

        // Validar región
        if (region === "") {
            $("#errorRegion").text("Selecciona una región.");
            valido = false;
        }

        // Validar fecha de nacimiento
        let hoy = new Date();
        let fechaHoy = hoy.getFullYear() + "-" +
            String(hoy.getMonth() + 1).padStart(2, "0") + "-" +
            String(hoy.getDate()).padStart(2, "0");

        if (nacimiento === "") {
            $("#errorNacimiento").text(
                "Ingresa tu fecha de nacimiento."
            );
            valido = false;
        } else if (nacimiento > fechaHoy) {
            $("#errorNacimiento").text(
                "La fecha no puede ser futura."
            );
            valido = false;
        }

        // Validar nivel educacional
        if (!nivel) {
            $("#errorNivel").text(
                "Selecciona tu nivel educacional."
            );
            valido = false;
        }

        // Validar carrera
        if (carrera === "") {
            $("#errorCarrera").text(
                "Selecciona una carrera de interés."
            );
            valido = false;
        }

        // Validar áreas de interés
        if ($("input[name='areas']:checked").length === 0) {
            $("#errorAreas").text(
                "Selecciona al menos un área de interés."
            );
            valido = false;
        }

        // Validar mensaje
        if (mensaje.length < 10 || mensaje.length > 500) {
            $("#errorMensaje").text(
                "El mensaje debe tener entre 10 y 500 caracteres."
            );
            valido = false;
        }

        // Mostrar el resultado
        if (valido) {
            $("#resultado")
                .text("¡Formulario validado correctamente!")
                .addClass("text-success");
        } else {
            $("#resultado")
                .text("Hay errores en el formulario. Revisa los mensajes en rojo.")
                .addClass("text-danger");
        }
    });

    // Limpiar mensajes al pulsar Limpiar
    $("#formulario").on("reset", function () {
        $("[id^='error']").text("");
        $("#resultado").text("").removeClass("text-success text-danger");
    });

});
