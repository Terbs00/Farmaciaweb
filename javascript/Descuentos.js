document.addEventListener("DOMContentLoaded", () => {
  const productos = document.querySelectorAll(".vitaminas");

  productos.forEach((producto, index) => {
    producto.style.opacity = "0";
    producto.style.transform = "translateY(20px)";
    setTimeout(() => {
      producto.style.transition = "all 0.6s ease";
      producto.style.opacity = "1";
      producto.style.transform = "translateY(0)";
    }, index * 150);
  });
});