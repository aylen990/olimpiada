const nav=`
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="productos.html">Productos</a></li>
                <li><a href="registro.html">Mi Cuenta</a></li>
                <li><a href="carrito.html">Carrito</a></li>
            </ul>
        </nav>`;
const footer= `<p>&copy; 2025 Olimpíada de Programación</p>`
document.querySelector('nav').innerHTML=nav;
document.querySelector('footer').innerHTML=footer;