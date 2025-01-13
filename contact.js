// Selecciona el formulario
const form = document.getElementById("contactForm");

// Añade el evento de envío
form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita la recarga de la página

    const formData = new FormData(form); // Recoge los datos del formulario

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            alert("¡Gracias! Tu mensaje ha sido enviado.");
            form.reset(); // Limpia el formulario
        } else {
            alert("Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al enviar el mensaje. Por favor, intenta más tarde.");
    }
});
