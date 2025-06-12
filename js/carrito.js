       let carrito = [];

function agregarAlCarrito(nombre, precio) {
    // Crear un objeto para el producto
    const producto = {
        nombre: nombre,
        precio: precio,
        cantidad: 1
    };

    // Verificar si el producto ya está en el carrito
    const index = carrito.findIndex(item => item.nombre === nombre);
    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        carrito.push(producto);
    }

    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoTable = document.getElementById('contenido-carrito');
    const totalElement = document.getElementById('total');
    
    // Limpiar el carrito
    carritoTable.innerHTML = '';

    let total = 0;

    // Agregar cada producto al carrito
    carrito.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio * item.cantidad}</td>
            <td><button class="eliminar-btn" onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button></td>
        `;
        carritoTable.appendChild(row);
        total += item.precio * item.cantidad;
    });

    totalElement.textContent = `Total: $${total}`;
}

function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    actualizarCarrito();
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. No puedes finalizar la compra.");
    } else {
        alert("Compra finalizada. ¡Gracias por tu compra!");
        carrito = [];
        actualizarCarrito();
    }
}