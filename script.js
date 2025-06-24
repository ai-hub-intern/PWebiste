// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Theme Toggle (Dark/Light Mode)
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Language Toggle (German/English)
const languageToggle = document.getElementById('languageToggle');
let currentLanguage = localStorage.getItem('language') || 'de';

// Language translations
const translations = {
    de: {
        // Navigation
        'Home': 'Home',
        'Services': 'Services',
        'About': 'Über mich',
        'Portfolio': 'Portfolio',
        'Sommeraktion': 'Sommeraktion',
        'Contact': 'Kontakt',
        
        // Hero Section
        'Transform Your Business with': 'Transformieren Sie Ihr Unternehmen mit',
        'Artificial Intelligence': 'Künstlicher Intelligenz',
        'As an experienced AI consultant, I help you find concrete AI solutions and implement them successfully. From strategy to implementation - your partner for digital transformation.': 'Als erfahrener AI-Consultant helfe ich Ihnen dabei, konkrete KI-Lösungen zu finden und erfolgreich zu implementieren. Von der Strategie bis zur Umsetzung - Ihr Partner für die digitale Transformation.',
        'Book Consultation': 'Beratung buchen',
        'Discover Services': 'Services entdecken',
        'Summer Special: 20% off consulting projects until August 31st.': 'Sommeraktion: 20% Rabatt auf Beratungsprojekte bis 31. August!',
        'Get in touch': 'Jetzt anfragen',
        
        // Services
        'My Services': 'Meine Services',
        'Comprehensive AI consulting for your success': 'Umfassende AI-Beratung für Ihren Erfolg',
        
        // About
        'About Me': 'Über mich',
        'Your experienced partner for AI transformation': 'Ihr erfahrener Partner für KI-Transformation',
        
        // Portfolio
        'Successful Projects': 'Erfolgreiche Projekte',
        'Insights into my work and success stories': 'Einblicke in meine Arbeit und Erfolgsgeschichten',
        
        // Contact
        'Contact': 'Kontakt',
        'Let\'s talk about your AI project': 'Lassen Sie uns über Ihr KI-Projekt sprechen',
        
        // Footer
        'Your partner for successful AI transformation': 'Ihr Partner für erfolgreiche KI-Transformation'
    },
    en: {
        // Navigation
        'Home': 'Home',
        'Services': 'Services',
        'About': 'About',
        'Portfolio': 'Portfolio',
        'Sommeraktion': 'Summer Deal',
        'Contact': 'Contact',
        
        // Hero Section
        'Transform Your Business with': 'Transform Your Business with',
        'Artificial Intelligence': 'Artificial Intelligence',
        'As an experienced AI consultant, I help you find concrete AI solutions and implement them successfully. From strategy to implementation - your partner for digital transformation.': 'As an experienced AI consultant, I help you find concrete AI solutions and implement them successfully. From strategy to implementation - your partner for digital transformation.',
        'Book Consultation': 'Book Consultation',
        'Discover Services': 'Discover Services',
        'Summer Special: 20% off consulting projects until August 31st.': 'Summer Special: 20% off consulting projects until August 31st.',
        'Get in touch': 'Get in touch',
        
        // Services
        'My Services': 'My Services',
        'Comprehensive AI consulting for your success': 'Comprehensive AI consulting for your success',
        
        // About
        'About Me': 'About Me',
        'Your experienced partner for AI transformation': 'Your experienced partner for AI transformation',
        
        // Portfolio
        'Successful Projects': 'Successful Projects',
        'Insights into my work and success stories': 'Insights into my work and success stories',
        
        // Contact
        'Contact': 'Contact',
        'Let\'s talk about your AI project': 'Let\'s talk about your AI project',
        
        // Footer
        'Your partner for successful AI transformation': 'Your partner for successful AI transformation'
    }
};

// Apply saved language
if (currentLanguage === 'en') {
    languageToggle.classList.add('english');
    applyLanguage('en');
}

languageToggle.addEventListener('click', () => {
    languageToggle.classList.toggle('english');
    
    if (languageToggle.classList.contains('english')) {
        currentLanguage = 'en';
        applyLanguage('en');
    } else {
        currentLanguage = 'de';
        applyLanguage('de');
    }
    
    localStorage.setItem('language', currentLanguage);
});

function applyLanguage(lang) {
    // Apply translations to elements with data attributes
    document.querySelectorAll('[data-de][data-en]').forEach(element => {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-de');
        }
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
    }
});

// Intersection Observer for Animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simulate form submission
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Wird gesendet...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitButton.innerHTML = '<i class="fas fa-check"></i> Nachricht gesendet!';
            submitButton.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
            
            // Reset form
            setTimeout(() => {
                this.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                submitButton.style.background = '';
            }, 3000);
            
            alert('Vielen Dank für Ihre Nachricht! Ich werde mich so schnell wie möglich bei Ihnen melden.');
        }, 2000);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add notification animations to CSS
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(notificationStyles);

// Floating Cards Animation Enhancement
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.floating-cards .card');
    
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            cards.forEach((otherCard, otherIndex) => {
                if (otherIndex !== index) {
                    otherCard.style.opacity = '0.5';
                    otherCard.style.transform = 'scale(0.95)';
                }
            });
        });
        
        card.addEventListener('mouseleave', () => {
            cards.forEach(otherCard => {
                otherCard.style.opacity = '1';
                otherCard.style.transform = 'scale(1)';
            });
        });
    });
});

// Portfolio Item Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.portfolio-image');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.portfolio-image');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Service Card Interaction
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Stats Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        const suffix = stat.textContent.replace(/[\d]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 50);
    });
}

// Trigger stats animation when in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        statsObserver.observe(statsGrid);
    }
});

// Form Validation
function validateForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    // Remove existing error styles
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    let isValid = true;
    let errorMessage = '';
    
    // Check if field is required and empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Dieses Feld ist erforderlich.';
    }
    // Email validation
    else if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }
    }
    
    if (!isValid) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        errorDiv.style.cssText = `
            color: #ff6b6b;
            font-size: 0.8rem;
            margin-top: 0.5rem;
            padding-left: 0.5rem;
        `;
        field.parentNode.appendChild(errorDiv);
    }
    
    return isValid;
}

// Add error styles to CSS
const errorStyles = document.createElement('style');
errorStyles.textContent = `
    .form-group input.error,
    .form-group textarea.error,
    .form-group select.error {
        border-color: #ff6b6b !important;
        background: rgba(255, 107, 107, 0.1) !important;
    }
`;
document.head.appendChild(errorStyles);

// Initialize form validation
document.addEventListener('DOMContentLoaded', validateForm);

// Parallax Effect for Hero Background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground) {
        const speed = 0.5;
        heroBackground.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Keyboard Navigation Support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
        
        // Close notifications
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => notification.remove());
    }
});

// Performance: Lazy load images when implemented
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Service Card Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
});

// Portfolio Item Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.portfolio-image');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.portfolio-image');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}); 