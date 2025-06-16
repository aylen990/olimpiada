  const openCartBtn = document.getElementById('openCartBtn'); // <-- ahora es por ID
  const closeCartBtn = document.getElementById('closeCart');
  const cart = document.getElementById('cart');
  const body = document.body;
  const cartItems = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('subtotal');
  const totalEl = document.getElementById('total');
  const unitsEl = document.getElementById('units');
  const overlay = document.getElementById('overlay');

  function updateCartTotals() {
    let subtotal = 0;
    let units = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
      const price = parseInt(item.getAttribute('data-price'));
      const qty = parseInt(item.querySelector('.qty').textContent);
      subtotal += price * qty;
      units += qty;
      item.querySelector('.item-price').textContent = price * qty;
    });
    subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
    totalEl.textContent = `$${(subtotal).toLocaleString()}`;
    unitsEl.textContent = `(${units} unidades)`;
  }
  openCartBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
  });

  closeCartBtn.addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);

  cartItems.addEventListener('click', function (e) {
    const item = e.target.closest('.cart-item');
    if (!item) return;

    if (e.target.classList.contains('plus')) {
      const qtyEl = item.querySelector('.qty');
      qtyEl.textContent = parseInt(qtyEl.textContent) + 1;
    }

    if (e.target.classList.contains('minus')) {
      const qtyEl = item.querySelector('.qty');
      const current = parseInt(qtyEl.textContent);
      if (current > 1) qtyEl.textContent = current - 1;
    }

    if (e.target.classList.contains('remove')) {
      item.remove();
    }

    updateCartTotals();
  });
  function openCart() {
  cart.style.display = 'flex';
  overlay.style.display = 'block';
  body.style.overflow = 'hidden'; // Bloquear scroll
}

function closeCart() {
  cart.style.display = 'none';
  overlay.style.display = 'none';
  body.style.overflow = 'auto'; // Restaurar scroll
}

  // Inicializar totales
  updateCartTotals();