        // Hero Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const totalSlides = slides.length;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].classList.add('active');
        }

        // Cambiar slide cada 5 segundos
        setInterval(nextSlide, 5000);

        // Offers Slider
        let currentOfferSlide = 0;
        const offerSlider = document.querySelector('.offers-slider');
        const offerCards = document.querySelectorAll('.offer-card');
        const totalOfferCards = offerCards.length;
        const cardsPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

        function updateOfferSlider() {
            const translateX = -currentOfferSlide * (100 / cardsPerView);
            offerSlider.style.transform = `translateX(${translateX}%)`;
        }

        document.querySelector('.prev-btn').addEventListener('click', () => {
            currentOfferSlide = currentOfferSlide > 0 ? currentOfferSlide - 1 : totalOfferCards - cardsPerView;
            updateOfferSlider();
        });

        document.querySelector('.next-btn').addEventListener('click', () => {
            currentOfferSlide = currentOfferSlide < totalOfferCards - cardsPerView ? currentOfferSlide + 1 : 0;
            updateOfferSlider();
        });

        // Auto-slide para ofertas
        setInterval(() => {
            currentOfferSlide = currentOfferSlide < totalOfferCards - cardsPerView ? currentOfferSlide + 1 : 0;
            updateOfferSlider();
        }, 7000);

        // Smooth scrolling para el hero hacia ofertas
        document.querySelector('.hero-buttons .btn-primary').addEventListener('click', function() {
            document.querySelector('.offers').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Animación para las tarjetas al hacer scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Aplicar animación a las tarjetas
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });

        // Aplicar animación a las tarjetas de ofertas
        document.querySelectorAll('.offer-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
        // Aplicar animación a cada viaje
        document.querySelectorAll('.viaje-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease';
            observer.observe(item);
        });
        // Responsive handling
        window.addEventListener('resize', () => {
            const newCardsPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
            if (newCardsPerView !== cardsPerView) {
                currentOfferSlide = 0;
                updateOfferSlider();
            }
        });