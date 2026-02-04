/**
 * modern.js - Modern interactions and animations for ANR IMPROVED
 * Author: A. SENDJASNI
 * Description: Scroll animations, interactions, and dynamic effects
 */

(function() {
  'use strict';

  // ========================================
  // PAGE LOADER
  // ========================================
  function initPageLoader() {
    window.addEventListener('load', function() {
      const loader = document.querySelector('.page-loader');
      if (loader) {
        setTimeout(function() {
          loader.classList.add('hidden');
        }, 500);
      }
    });
  }

  // ========================================
  // STICKY HEADER
  // ========================================
  function initStickyHeader() {
    const header = document.querySelector('.modern-header');
    if (!header) return;

    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }

  // ========================================
  // MOBILE MENU TOGGLE
  // ========================================
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) return;
    
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = menuToggle.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // ========================================
  // ACTIVE NAV LINK HIGHLIGHTING
  // ========================================
  function initActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href === currentPath || (href !== '/' && currentPath.includes(href))) {
        link.classList.add('active');
      }
    });
  }

  // ========================================
  // SCROLL ANIMATIONS (Intersection Observer)
  // ========================================
  function initScrollAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          // Optional: Unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .card, .partner-card, .post-card, .timeline-content'
    );

    animatedElements.forEach(function(element) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      observer.observe(element);
    });

    // Add animated class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .animated {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
    `;
    document.head.appendChild(style);
  }

  // ========================================
  // STAGGERED ANIMATIONS
  // ========================================
  function initStaggeredAnimations() {
    const cards = document.querySelectorAll('.card, .partner-card, .post-card');
    
    cards.forEach(function(card, index) {
      card.style.animationDelay = (index * 0.1) + 's';
    });
  }

  // ========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ========================================
  // PARALLAX EFFECT
  // ========================================
  function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (parallaxElements.length === 0) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(function(element) {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = 'translateY(' + yPos + 'px)';
      });
    });
  }

  // ========================================
  // BUTTON RIPPLE EFFECT
  // ========================================
  function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(function() {
          ripple.remove();
        }, 600);
      });
    });
    
    // Add ripple styles
    const style = document.createElement('style');
    style.textContent = `
      .btn {
        position: relative;
        overflow: hidden;
      }
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
      }
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ========================================
  // ANIMATED COUNTER
  // ========================================
  function initAnimatedCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    counters.forEach(function(counter) {
      const target = parseInt(counter.dataset.counter);
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;
      
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const timer = setInterval(function() {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              counter.textContent = Math.floor(current);
            }, 16);
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  }

  // ========================================
  // CARD HOVER EFFECT WITH TILT
  // ========================================
  function initCardTilt() {
    const cards = document.querySelectorAll('.card, .partner-card');
    
    cards.forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  }

  // ========================================
  // LAZY LOADING IMAGES
  // ========================================
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // ========================================
  // BACK TO TOP BUTTON
  // ========================================
  function initBackToTop() {
    // Create button if it doesn't exist
    let backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) {
      backToTopBtn = document.createElement('button');
      backToTopBtn.className = 'back-to-top';
      backToTopBtn.innerHTML = '↑';
      backToTopBtn.setAttribute('aria-label', 'Retour en haut');
      document.body.appendChild(backToTopBtn);
      
      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 999;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        .back-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }
      `;
      document.head.appendChild(style);
    }
    
    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========================================
  // INITIALIZE ALL FUNCTIONS
  // ========================================
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        runInit();
      });
    } else {
      runInit();
    }
  }

  function runInit() {
    initPageLoader();
    initStickyHeader();
    initMobileMenu();
    initActiveNavLink();
    initScrollAnimations();
    initStaggeredAnimations();
    initSmoothScroll();
    initParallax();
    initRippleEffect();
    initAnimatedCounters();
    initCardTilt();
    initLazyLoading();
    initBackToTop();
  }

  // Start initialization
  init();

})();
