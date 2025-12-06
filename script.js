

function verificarCampo() {
  // Obtiene el valor del campo de texto con id="miCampo"
  let campo = document.getElementById("miCampo").value;

  // Verifica si el campo está vacío
  if (campo.trim() === "") {
    alert("⚠️ El campo está vacío. Por favor, escribe algo.");
  } else {
    alert("✅ El campo fue completado correctamente.");
  }
}
const btn=
document.getElementById("boton-menu");
const menu=document.getElementById("menu");
btn.addEventListener("click",()=> {
  menu.classlist.toggle("show");
});

