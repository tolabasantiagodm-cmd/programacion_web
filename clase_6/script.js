const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores
    const nombre = document.querySelector("#nombre_apellido").value.trim();
    const email = document.querySelector("#email").value.trim();

    const tamañoSeleccionado = document.querySelector(
        'input[name="tamaño"]:checked'
    );

    const tipoHelado = document.querySelector("#helado").value;

    // Mensaje donde mostraremos errores o confirmación
    let mensaje = document.querySelector("#mensaje");

    if (!mensaje) {
        mensaje = document.createElement("div");
        mensaje.id = "mensaje";
        formulario.appendChild(mensaje);
    }

    // Limpiar mensaje anterior
    mensaje.textContent = "";
    mensaje.style.color = "";

    // Validar nombre
    if (nombre === "") {
        mensaje.textContent = "Por favor, ingresá tu nombre y apellido.";
        mensaje.style.color = "red";
        return;
    }

    // Validar email vacío
    if (email === "") {
        mensaje.textContent = "Por favor, ingresá tu email.";
        mensaje.style.color = "red";
        return;
    }

    // Validar que el email tenga @
    if (!email.includes("@")) {
        mensaje.textContent = "El email debe contener @.";
        mensaje.style.color = "red";
        return;
    }

    // Validar tamaño
    if (!tamañoSeleccionado) {
        mensaje.textContent = "Por favor, seleccioná un tamaño.";
        mensaje.style.color = "red";
        return;
    }

    // Validar tipo de helado
    if (tipoHelado === "") {
        mensaje.textContent = "Por favor, seleccioná un tipo de helado.";
        mensaje.style.color = "red";
        return;
    }

    // Obtener sabores seleccionados
    const sabores = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    const listaSabores = Array.from(sabores)
        .map(function (sabor) {
            return sabor.value;
        })
        .join(", ");

    // Mostrar confirmación
    mensaje.style.color = "green";
    mensaje.innerHTML = `
        <h3>¡Pedido confirmado!</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tamaño:</strong> ${tamañoSeleccionado.value}</p>
        <p><strong>Sabores:</strong> ${listaSabores || "Ninguno"}</p>
        <p><strong>Tipo de helado:</strong> ${tipoHelado}</p>
    `;
});
