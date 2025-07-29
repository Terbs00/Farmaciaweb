document.addEventListener("DOMContentLoaded", () => {
  const productos = document.querySelectorAll(".catalogo");
  const carritoLista = document.createElement("ul");
  const totalTexto = document.createElement("p");
  const vaciarBtn = document.createElement("button");

  let carrito = [];

  const carritoDiv = document.createElement("div");
  carritoDiv.className = "carrito";
  carritoDiv.innerHTML = `<h2>Carrito de Compras</h2>`;
  document.body.appendChild(carritoDiv);

  carritoDiv.appendChild(carritoLista);
  totalTexto.id = "total";
  carritoDiv.appendChild(totalTexto);

  vaciarBtn.textContent = "Vaciar carrito";
  vaciarBtn.id = "vaciar-carrito";
  carritoDiv.appendChild(vaciarBtn);

  productos.forEach(producto => {
    const btn = document.createElement("button");
    btn.className = "btn-agregar";
    btn.textContent = "Agregar al carrito";
    producto.appendChild(btn);

    btn.addEventListener("click", () => {
      const nombre = producto.querySelector("h3").innerText;
      const precio = parseFloat(producto.querySelector(".precio").innerText.replace("L. ", ""));
      carrito.push({ nombre, precio });
      actualizarCarrito();
    });
  });

  vaciarBtn.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
  });

  function actualizarCarrito() {
    carritoLista.innerHTML = "";
    let total = 0;
    carrito.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.nombre} – L. ${item.precio.toFixed(2)}`;
      carritoLista.appendChild(li);
      total += item.precio;
    });
    totalTexto.textContent = `Total: L. ${total.toFixed(2)}`;
  }
});
