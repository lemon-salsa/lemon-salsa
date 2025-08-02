// 🔐 Configura tu Firebase aquí
const firebaseConfig = {
  apiKey: "AIzaSyByRQ59-jhe8umMdSbiyEa-PDfTn4fQAZE",
  authDomain: "lemon-salsa.firebaseapp.com",
  projectId: "lemon-salsa",
  storageBucket: "lemon-salsa.firebasestorage.app",
  messagingSenderId: "989493339949",
  appId: "1:989493339949:web:8b4a6857f306d02623d5a4",
  measurementId: "G-8PG82EED3N"
};

// 🚀 Inicializar Firebase (compat)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 📩 Enviar datos del formulario a Firestore
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("pedidoForm");

  if (!formulario) {
    console.error("No se encontró el formulario con id 'pedidoForm'");
    return;
  }

  formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre")?.value.trim();
    const celular = document.getElementById("celular")?.value.trim();
    const cantidad = document.getElementById("cantidad")?.value.trim();
    const producto = document.getElementById("producto")?.value.trim();

    if (!nombre || !celular || !cantidad || !producto) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      await db.collection("pedidos").add({
        nombre,
        celular,
        cantidad,
        producto,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      // mostrar mensaje de éxito en el modal en lugar de alert si quieres
      alert("✅ Pedido enviado correctamente.");
      formulario.reset();
    } catch (error) {
      console.error("Error al enviar pedido:", error);
      alert("❌ Ocurrió un error al enviar el pedido.");
    }
  });
});
