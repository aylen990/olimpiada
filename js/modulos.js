const header=`
        <nav class="navbar">
            <div class="logo">TravelPro</div>
            <ul class="nav-menu">
                <li><a href="index.html"><i class="fa-solid fa-house"></i> Inicio</a></li>
                <li><a href="productos.html"><i class="fa-solid fa-wallet"></i> Productos</a></li>
                <li><a href="micuenta.html"><i class="fa-solid fa-user"></i> Mi Cuenta</a></li>
                <li><a href="carrito.html"><i class="fa-solid fa-cart-shopping"></i> Carrito</a></li>
            </ul>
            <div class="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>`;
const footer= `        <div class="footer-content">
            <div class="footer-section">
                <h3>TravelPro</h3>
                <p>La plataforma profesional de reservas de vuelos más confiable para agentes de viajes y viajeros exigentes.</p>
                <div class="social-icons">
                    <a href=" " class="social-icon"><i class="fab fa-facebook-f"></i></a>
                    <a href=" " class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href=" " class="social-icon"><i class="fab fa-instagram"></i></a>
                </div>
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
                    <li><a href="#">Centro de Ayuda</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Políticas</a></li>
                    <li><a href="#">Términos de Uso</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Conecta</h3>
                <p>Mantente conectado con nosotros para las últimas actualizaciones y ofertas especiales.</p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2024 TravelPro. Todos los derechos reservados.</p>
        </div>`
document.querySelector('header').innerHTML=header;
document.querySelector('footer').innerHTML=footer;

// Agregar esta función al final de tu archivo modulos.js o en un archivo separado

// Función para hacer funcionar el menú hamburguesa
function initResponsiveMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Cerrar el menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
}

// Llamar la función después de que se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Tu código existente aquí
    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
    
    // Inicializar el menú responsive
    initResponsiveMenu();
});