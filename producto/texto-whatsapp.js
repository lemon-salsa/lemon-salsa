document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btn-whatsapp");
  const producto = document.getElementById("nombre-producto");
  const imagen = document.getElementById("imagen-producto");

  if (boton && producto && imagen) {
    const nombreProducto = producto.textContent.trim();
    const urlImagen = imagen.src;

    const mensaje = `Hola.%0AQuiero%20hacerme%20más%20información%20sobre%20este%20producto%3A%0A${encodeURIComponent(nombreProducto)}%0AImagen%3A%20${encodeURIComponent(urlImagen)}`;

    const enlace = `https://wa.me/59163281628?text=${mensaje}`;

    boton.onclick = function () {
      window.location.href = enlace;
    };
  }
});


