document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle para dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Adicionar efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de hover nos produtos
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.btn-add-cart')?.classList.add('show');
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.btn-add-cart')?.classList.remove('show');
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar código para processar o formulário
            // Por exemplo, enviar dados para um servidor
            
            // Simulando envio
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    }
    
    // Formulário de newsletter
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            if (!emailInput.value) return;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Cadastrando...';
            
            setTimeout(() => {
                alert('E-mail cadastrado com sucesso!');
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    });
    
    // Efeito de aparecimento ao rolar
    const revealElements = document.querySelectorAll('.product-item, .video-card, .category-card, .contact-info-item');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Adicionar classe CSS para o efeito de aparecimento
    const style = document.createElement('style');
    style.innerHTML = `
        .product-item, .video-card, .category-card, .contact-info-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .product-item.revealed, .video-card.revealed, .category-card.revealed, .contact-info-item.revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        .btn-add-cart {
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
        }
        
        .btn-add-cart.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .menu-open {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
    
    // Verificar elementos ao carregar a página
    window.addEventListener('load', checkReveal);
    
    // Verificar elementos ao rolar
    window.addEventListener('scroll', checkReveal);
    
    // Adicionar delay na animação dos elementos
    revealElements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.1}s`;
    });
}); 