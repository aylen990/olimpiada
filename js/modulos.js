const header = `
    <nav class="navbar">
        <div class="logo">TravelPro</div>
        <ul class="nav-menu" id="menu-lateral">
            <li><a href="index.html"><i class="fa-solid fa-house"></i> Inicio</a></li>
            <li><a href="productos.html"><i class="fa-solid fa-wallet"></i> Productos</a></li>
            <li><a href="micuenta.html"><i class="fa-solid fa-user"></i> Mi Cuenta</a></li>
            <li><a href="#" id="openCart"><i class="fa-solid fa-cart-shopping"></i> Carrito</a></li>
        </ul>
        <div class="nav-toggle" id="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
`;
document.querySelector('header').innerHTML=header;
const footer= `        <div class="footer-content">
            <div class="footer-section">
                <h3>TravelPro</h3>
                <p>La plataforma profesional de reservas de vuelos más confiable para agentes de viajes y viajeros exigentes.</p>
            </div>
            
            <div class="footer-section">
                <h3>Servicios</h3>
                <ul class="footer-links">
                    <li><a href="#">Reserva de Vuelos</a></li>
                    <li><a href="#">Gestión de Reservas</a></li>
                    <li><a href="#">Panel de Agentes</a></li>
                    <li><a href="#">Historial de Viajes</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Soporte</h3>
                <ul class="footer-links">
                    <li><a href="centroDeAyuda.html">Centro de Ayuda</a></li>
                    <li><a href="politicas.html">Políticas</a></li>
                    <li><a href="terminosDeUso.html">Términos de Uso</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Conecta</h3>
                <p>Mantente conectado con nosotros para las últimas actualizaciones y ofertas especiales.</p>
                <div class="social-icons">
                    <a href=" " class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    <a href=" " class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href=" " class="social-icon"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2024 TravelPro. Todos los derechos reservados.</p>
        </div>`
document.querySelector('footer').innerHTML=footer;
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu-lateral");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});