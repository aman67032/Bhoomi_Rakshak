// Bhoomi Rakshak JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tabs functionality
    const tabs = document.querySelectorAll('.law-tab');
    const tabContents = document.querySelectorAll('.law-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
    
    // Mining Hotspots Map Interaction
    const hotspotPoints = document.querySelectorAll('.hotspot-point');
    const hotspotTabs = document.querySelectorAll('.hotspot-tab');
    const hotspotContents = document.querySelectorAll('.hotspot-content');
    
    // Function to activate a specific region
    const activateRegion = (regionName) => {
        // Remove active class from all tabs and contents
        hotspotTabs.forEach(tab => tab.classList.remove('active'));
        hotspotContents.forEach(content => content.classList.remove('active'));
        
        // Remove active-region class from all hotspots
        hotspotPoints.forEach(point => {
            point.classList.remove('active-region');
        });
        
        // Add active class to matching tab and content
        const matchingTab = document.querySelector(`.hotspot-tab[data-region="${regionName}"]`);
        const matchingContent = document.getElementById(regionName);
        const matchingPoint = document.querySelector(`.hotspot-point[data-region="${regionName}"]`);
        
        if (matchingTab && matchingContent) {
            matchingTab.classList.add('active');
            matchingContent.classList.add('active');
            
            // Ensure tab is visible by scrolling if needed
            matchingTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
        
        // Highlight the active region on the map
        if (matchingPoint) {
            matchingPoint.classList.add('active-region');
        }
    };
    
    // Add click event to map hotspots
    hotspotPoints.forEach(point => {
        point.addEventListener('click', function() {
            const region = this.getAttribute('data-region');
            activateRegion(region);
        });
    });
    
    // Add click event to hotspot tabs
    hotspotTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const region = this.getAttribute('data-region');
            activateRegion(region);
        });
    });
    
    // Mobile menu setup
    const hamburger = document.querySelector('.hamburger');
    let mobileNav, overlay, closeMenu;
    
    // Create mobile nav if it doesn't exist
    if (!document.querySelector('.mobile-nav')) {
        // Create overlay
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
        
        // Create mobile nav
        mobileNav = document.createElement('div');
        mobileNav.className = 'mobile-nav';
        
        // Create close button
        const closeDiv = document.createElement('div');
        closeDiv.className = 'close-menu';
        closeMenu = document.createElement('i');
        closeMenu.className = 'fas fa-times';
        closeDiv.appendChild(closeMenu);
        mobileNav.appendChild(closeDiv);
        
        // Copy nav links to mobile nav
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            const mobileNavLinks = navLinks.cloneNode(true);
            mobileNav.appendChild(mobileNavLinks);
        }
        
        document.body.appendChild(mobileNav);
    } else {
        mobileNav = document.querySelector('.mobile-nav');
        overlay = document.querySelector('.overlay');
        closeMenu = document.querySelector('.close-menu i');
    }
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
<<<<<<< HEAD

            // Close mobile menu if open
            if (mobileNav && mobileNav.classList.contains('active')) {
=======
            
            // Close mobile menu if open
            if (mobileNav.classList.contains('active')) {
>>>>>>> fdb4edd3a4e24e1200c1ff67b741df735e41c278
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
<<<<<<< HEAD

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

=======
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
>>>>>>> fdb4edd3a4e24e1200c1ff67b741df735e41c278
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation
    const reportForm = document.querySelector('.report-form');
    
    if (reportForm) {
        reportForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = reportForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
            
            if (isValid) {
                alert('Your report has been submitted. Thank you for contributing to the fight against illegal mining!');
                reportForm.reset();
            } else {
                alert('Please fill in all required fields');
            }
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailRegex.test(emailInput.value.trim())) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
            } else {
                alert('Please enter a valid email address');
                emailInput.style.borderColor = '#e74c3c';
            }
        });
    }
    
    // Scroll animations
    const scrollElements = document.querySelectorAll('.about-stats .stat-card, .impact-card, .channel-card, .process-step, .testimonial-card, .hotspot-point');
    
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementHeight = el.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        return (
            elementTop <= windowHeight * (percentageScroll / 100) &&
            elementTop + elementHeight > 0
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 80)) {
                displayScrollElement(el);
            }
        });
    };
    
    // Add scroll animation class
    scrollElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Staggered animation for hotspots
    const hotspotElements = document.querySelectorAll('.hotspot-point');
    hotspotElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Trigger once on load
    handleScrollAnimation();
    
    // Anonymous checkbox toggle
    const anonymousCheckbox = document.getElementById('anonymous');
    const contactField = document.getElementById('contact');
    
    if (anonymousCheckbox && contactField) {
        anonymousCheckbox.addEventListener('change', function() {
            if (this.checked) {
                contactField.value = '';
                contactField.disabled = true;
            } else {
                contactField.disabled = false;
            }
        });
    }
});