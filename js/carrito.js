document.addEventListener("DOMContentLoaded", () => {
  const btnVerDetalle = document.getElementById("verDetalle");
  const detalleDescuento = document.getElementById("detalleDescuento");

  if (btnVerDetalle && detalleDescuento) {
    btnVerDetalle.addEventListener("click", () => {
      detalleDescuento.classList.toggle("visible");
    });
  }

  const cartOverlay = document.getElementById("cart");
  const backdrop = document.getElementById("backdrop");
  const openCartBtn = document.getElementById("openCart");
  const closeCartBtn = document.getElementById("closeCart");
  const cartItems = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");
  const unitsEl = document.getElementById("units");
  const checkoutBtn = document.querySelector(".checkout-btn"); // 👈 Agregado

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      alert("Compra finalizada ✅");
      closeCart();
    });
  }

  function updateCartTotals() {
    let subtotal = 0;
    let units = 0;

    document.querySelectorAll(".cart-item").forEach(item => {
      const qty = parseInt(item.querySelector(".qty").textContent);
      const price = parseFloat(item.dataset.price);
      subtotal += qty * price;
      units += qty;
      item.querySelector(".item-price").textContent = (qty * price).toFixed(2);
    });

    const total = subtotal * 0.95; // 5% de descuento
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
    unitsEl.textContent = `(${units} ${units === 1 ? "unidad" : "unidades"})`;
  }

  function openCart() {
    cartOverlay.style.display = "flex";
    backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
    updateCartTotals();
  }

  function closeCart() {
    cartOverlay.style.display = "none";
    backdrop.style.display = "none";
    document.body.style.overflow = "";
  }

  openCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openCart();
  });

  closeCartBtn.addEventListener("click", closeCart);
  backdrop.addEventListener("click", closeCart);

  // Eventos para sumar, restar y eliminar
  cartItems.addEventListener("click", (e) => {
    const item = e.target.closest(".cart-item");
    if (!item) return;

    const qtyEl = item.querySelector(".qty");
    let qty = parseInt(qtyEl.textContent);

    if (e.target.classList.contains("plus")) {
      qty++;
    } else if (e.target.classList.contains("minus") && qty > 1) {
      qty--;
    } else if (e.target.classList.contains("remove")) {
      item.remove();
      updateCartTotals();
      return;
    }

    qtyEl.textContent = qty;
    updateCartTotals();
  });

  updateCartTotals();
});
