        // Enhanced JavaScript functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Loading screen
            setTimeout(() => {
                document.getElementById('loadingOverlay').classList.add('hidden');
            }, 1500);

            // Header scroll effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Enhanced CTA button interaction
            const ctaButton = document.querySelector('.cta-button');
            ctaButton.addEventListener('click', function() {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = event.clientX - rect.left - size / 2;
                const y = event.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255,255,255,0.3)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.pointerEvents = 'none';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
                
                // Simulate navigation
                setTimeout(() => {
                    alert('🚀 Welcome to the future of browsing! This would navigate to detailed features.');
                }, 300);
            });

            // Animated counter for the main stat
            function animateCounter() {
                const counter = document.getElementById('mainStat');
                const target = 78;
                let current = 0;
                const increment = target / 60;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current) + '%';
                }, 50);
            }

            // Trigger counter animation when page loads
            setTimeout(animateCounter, 2000);

            // Parallax effect for background elements
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const shapes = document.querySelectorAll('.floating-shape');
                
                shapes.forEach((shape, index) => {
                    const speed = 0.5 + (index * 0.1);
                    shape.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });

            // Interactive laptop mockup
            const laptop = document.querySelector('.laptop-mockup');
            laptop.addEventListener('mousemove', (e) => {
                const rect = laptop.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                laptop.style.transform = `rotateX(${10 + rotateX}deg) rotateY(${-5 + rotateY}deg) scale(1.02)`;
            });

            laptop.addEventListener('mouseleave', () => {
                laptop.style.transform = 'rotateX(10deg) rotateY(-5deg) scale(1)';
            });
        });

        // Add ripple animation style
        const rippleStyle = document.createElement('style');
        rippleStyle.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyle);