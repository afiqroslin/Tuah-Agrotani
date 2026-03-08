// Product modal functionality
document.addEventListener('DOMContentLoaded', function () {
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const imageUrl = button.getAttribute('data-image');
            const productName = button.getAttribute('data-name');
            
            const modalImage = document.getElementById('modalProductImage');
            const modalTitle = document.getElementById('productModalLabel');
            
            modalImage.src = imageUrl;
            modalTitle.textContent = productName;
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

        
// Active nav link on scroll and navbar transparency
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-list-section').forEach(function(section) {
        // only add button if list is longer than can fit
        var ul = section.querySelector('ul');
        if (ul.scrollHeight <= section.clientHeight) return;
        var btn = document.createElement('button');
        btn.textContent = 'Show More';
        btn.className = 'show-more-btn';
        btn.addEventListener('click', function() {
            if (section.classList.contains('expanded')) {
                section.classList.remove('expanded');
                btn.textContent = 'Show More';
            } else {
                section.classList.add('expanded');
                btn.textContent = 'Show Less';
            }
        });
        section.appendChild(btn);
    });
});