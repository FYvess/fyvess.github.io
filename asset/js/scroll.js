// Enhanced Scroll Functionality with Active Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll functionality
    initializeScrollNavigation();
    initializeScrollEffects();
});

function initializeScrollNavigation() {
    // Select the menu icon and navbar
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    // Enhanced scroll handler for active navigation
    function handleScroll() {
        const scrollPosition = window.scrollY + 150; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            // Check if current scroll position is within section bounds
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Throttled scroll event for better performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Mobile menu toggle functionality
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', function() {
            this.classList.toggle('bx-x');
            navbar.classList.toggle('active');
            
            // Add animation class
            if (navbar.classList.contains('active')) {
                navbar.style.animation = 'slideDown 0.3s ease forwards';
            } else {
                navbar.style.animation = 'slideUp 0.3s ease forwards';
            }
        });
        
        // Close mobile menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            }
        });
    }
}

function initializeScrollEffects() {
    // Header background change on scroll
    const header = document.querySelector('.header');
    
    function updateHeaderBackground() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeaderBackground);
    
    // Scroll to top functionality
    createScrollToTopButton();
    
    // Parallax effects for certain elements
    initializeParallaxEffects();
}

function createScrollToTopButton() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--accent-color);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(126, 91, 239, 0.3);
        }
        
        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            background: var(--primary-dark);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(126, 91, 239, 0.4);
        }
        
        .header.scrolled {
            background: rgba(11, 12, 16, 0.98) !important;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideUp {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-20px);
            }
        }
        
        @media (max-width: 768px) {
            .scroll-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 20px;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.home-img img, .hero-header');
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.1;
        
        parallaxElements.forEach(element => {
            if (element.classList.contains('hero-header')) {
                element.style.transform = `translateY(${rate * 0.5}px)`;
            } else {
                element.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // Use requestAnimationFrame for smooth parallax
    let parallaxTicking = false;
    function requestParallaxTick() {
        if (!parallaxTicking) {
            requestAnimationFrame(function() {
                updateParallax();
                parallaxTicking = false;
            });
            parallaxTicking = true;
        }
    }
    
    window.addEventListener('scroll', requestParallaxTick);
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    // Polyfill for smooth scrolling
    function smoothScrollTo(target, duration = 800) {
        const targetPosition = target.offsetTop - document.querySelector('.header').offsetHeight;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
    
    // Override smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScrollTo(target);
            }
        });
    });
}

// Initialize scroll progress indicator
function createScrollProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    
    const progressStyle = document.createElement('style');
    progressStyle.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--accent-color), var(--primary-dark));
            z-index: 1001;
            transition: width 0.1s ease;
        }
    `;
    
    document.head.appendChild(progressStyle);
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress indicator
createScrollProgressIndicator();