
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btn-whatsapp");

  if (boton) {

    // Obtener la hora local del usuario
    const hora = new Date().getHours();
    let saludo = "Hola";

    if (hora >= 5 && hora < 12) {
      saludo = "Buenos días";
    } else if (hora >= 12 && hora < 18) {
      saludo = "Buenas tardes";
    } else {
      saludo = "Buenas noches";
    }

    const mensaje = `${saludo}.%0AQuiero%20hacer%20un%20pedido%20de%20Lemon%20Salsa`;

    const enlace = `https://wa.me/59163281628?text=${mensaje}`;

    boton.onclick = function () {
      window.location.href = enlace;
    };
  }
});




