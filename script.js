document.getElementById("pedidoForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const pedido = document.getElementById("pedido").value.trim();
  const barrio = document.getElementById("barrio").value.trim();
  const estado = document.getElementById("estado").value;
  

  const data = { nombre, telefono, direccion, pedido, barrio, estado };
  const scriptURL = "https://script.google.com/macros/s/AKfycbyZ91G6kQwsrsxYteghv4ptP27PeUNwx6BdxIZH3H6-GNXnd0BpiNeC2okUFlnQdXU/exec";

  try {
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    mostrarVentana("✅ Pedido Guardado con éxito", "https://cdn-icons-png.flaticon.com/512/190/190411.png");
    document.getElementById("pedidoForm").reset();

  } catch (err) {
    console.error(err);
    mostrarVentana("⚠️ Error en la conexión con la corte del Lechón", "https://cdn-icons-png.flaticon.com/512/564/564619.png");
  }
});

function mostrarVentana(mensaje, icono) {
  const ventana = document.getElementById("mensajeVentana");
  const iconoImg = document.getElementById("iconoVentana");
  const texto = document.getElementById("mensajeTexto");

  iconoImg.src = icono;
  texto.textContent = mensaje;
  ventana.style.display = "block";

  setTimeout(() => {
    ventana.style.display = "none";
  }, 3000);
}

// Bloquea letras en campos numéricos
document.getElementById("telefono").addEventListener("keypress", function(e) {
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault(); // Bloquea la tecla
  }
});

document.getElementById("pedido").addEventListener("keypress", function(e) {
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
});

// Bloquea números en campos de texto
document.getElementById("nombre").addEventListener("keypress", function(e) {
  if (!/[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/.test(e.key)) {
    e.preventDefault();
  }
});

// 🏘️ Lista de barrios de Cali
const barrios = [
  "Alameda", "Alfonso López", "Bellavista", "Brisas de los Álamos", "Caney", "Centro",
  "Ciudad Jardín", "El Ingenio", "El Lido", "El Refugio", "Floralia", "Gran Limonar",
  "Jamundí", "La Flora", "La Merced", "La Rivera", "Los Cámbulos", "Los Cristales",
  "Los Guayacanes", "Mariano Ramos", "Meléndez", "Miraflores", "Nápoles",
  "Nueva Floresta", "Pance", "Pasoancho", "Petecuy", "Prados del Norte", "Salomia",
  "San Antonio", "San Bosco", "San Cayetano", "San Fernando", "San Judas", "San Nicolás",
  "San Vicente", "Siloé", "Terrón Colorado", "Valle del Lili", "Versalles", "Villa del Prado",
  "Villa Colombia"
];

const listaBarrios = document.getElementById("listaBarrios");
barrios.forEach(barrio => {
  const option = document.createElement("option");
  option.value = barrio;
  listaBarrios.appendChild(option);
});




