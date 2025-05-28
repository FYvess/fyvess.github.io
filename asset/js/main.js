// Intro Animation Controller
;(() => {
  // Check if intro has been shown in this session
  const hasSeenIntro = sessionStorage.getItem("introShown")
  const introLoader = document.getElementById("introLoader")

  if (!hasSeenIntro && introLoader) {
    // Show intro animation
    document.body.classList.add("loading")

    // Hide intro after animation completes
    setTimeout(() => {
      introLoader.classList.add("hidden")
      document.body.classList.remove("loading")
      document.body.classList.add("loaded")

      // Mark intro as shown for this session
      sessionStorage.setItem("introShown", "true")

      // Start main page animations
      initializeMainPageAnimations()
    }, 4500) // Total intro duration: 4.5 seconds
  } else {
    // Skip intro, show content immediately
    if (introLoader) {
      introLoader.style.display = "none"
    }
    document.body.classList.add("loaded")
    initializeMainPageAnimations()
  }
})()

// Initialize main page animations after intro
function initializeMainPageAnimations() {
  // Animate hero section elements
  const homeContent = document.querySelector(".home-content")
  const homeImg = document.querySelector(".home-img")

  if (homeContent) {
    homeContent.style.animation = "fadeInUp 1s ease forwards"
  }

  if (homeImg) {
    homeImg.style.animation = "fadeInUp 1s ease 0.3s forwards"
    homeImg.style.opacity = "0"
  }

  // Trigger other animations
  setTimeout(() => {
    const animatedElements = document.querySelectorAll(".reveal-element")
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, index * 100)
    })
  }, 800)
}

// Enhanced loading experience
window.addEventListener("beforeunload", () => {
  // Clear the intro flag on page unload to ensure it shows on hard refresh
  if (performance.navigation.type === 1) {
    // Hard refresh
    sessionStorage.removeItem("introShown")
  }
})

// Declare functions before using them
function initializeTabFunctionality() {
  // Function implementation here
}

function initializeSmoothScrolling() {
  // Function implementation here
}

function initializeAnimations() {
  // Function implementation here
}

function initializeCounters() {
  // Function implementation here
}

function initializeInteractiveFeatures() {
  // Function implementation here
}

function initializeMobileMenu() {
  // Function implementation here
}

// Rest of the existing JavaScript code...
document.addEventListener("DOMContentLoaded", () => {
  // Only initialize if intro is not showing
  if (!document.body.classList.contains("loading")) {
    initializeAllFunctionality()
  } else {
    // Wait for intro to finish before initializing
    setTimeout(() => {
      initializeAllFunctionality()
    }, 4500)
  }
})

function initializeAllFunctionality() {
  initializeTabFunctionality()
  initializeSmoothScrolling()
  initializeAnimations()
  initializeCounters()
  initializeInteractiveFeatures()
  initializeMobileMenu()
}


// Portfolio Tab Functionality and Enhanced Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeTabFunctionality();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeCounters();
    initializeInteractiveFeatures();
    initializeMobileMenu();
});

// Tab Functionality
function initializeTabFunctionality() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding panel with animation
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                setTimeout(() => {
                    targetPanel.classList.add('active');
                }, 100);
            }
        });
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbar = document.querySelector('.navbar');
                const menuIcon = document.querySelector('#menu-icon');
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    menuIcon.classList.remove('bx-x');
                }
            }
        });
    });
}

// Intersection Observer for Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Trigger counter animation for stats
                if (entry.target.classList.contains('stats-card')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.reveal-element, .fade-in-up, .stats-card, .portfolio-item, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Counter Animation
function initializeCounters() {
    // This will be triggered by the intersection observer
}

function animateCounter(card) {
    const numberElement = card.querySelector('.stats-number');
    const target = parseInt(numberElement.getAttribute('data-target')) || 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        numberElement.textContent = Math.floor(current);
    }, 16);
}

// Interactive Features
function initializeInteractiveFeatures() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .tab-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
    
    // Add hover effects to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImg = document.querySelector('.home-img img');
        if (heroImg) {
            heroImg.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', function() {
            this.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
                navbar.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            }
        });
    }
}

// Ripple Effect
function createRippleEffect(e, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(11, 12, 16, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(11, 12, 16, 0.9)';
        header.style.boxShadow = 'none';
    }
});

// Add CSS for ripple effect and other animations
const style = document.createElement('style');
style.textContent = `
    .btn, .tab-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .portfolio-item {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .stats-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .contact-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(style);

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate elements on load
    const homeContent = document.querySelector('.home-content');
    const homeImg = document.querySelector('.home-img');
    
    if (homeContent) {
        homeContent.style.animation = 'fadeInUp 1s ease forwards';
    }
    
    if (homeImg) {
        homeImg.style.animation = 'fadeInUp 1s ease 0.3s forwards';
        homeImg.style.opacity = '0';
    }
});