// ============================================
// SPETTACOLARE - MAIN JAVASCRIPT
// Restaurant Website Functionality
// ============================================

// ============================================
// MENU DATA
// ============================================
const menuData = {
    pizzas: [{
            name: "Margherita Pizza Napolitana",
            description: "Traditional Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil",
            category: "pizzas",
            badge: "⭐ Classic"
        },
        {
            name: "Naples Pizza",
            description: "Authentic Naples-style pizza with premium toppings and wood-fired perfection",
            category: "pizzas"
        },
        {
            name: "Romana Pizza",
            description: "Roman-style thin crust pizza with traditional Italian ingredients",
            category: "pizzas"
        }
    ],
    pasta: [{
            name: "Handmade Pasta",
            description: "Fresh pasta made daily using traditional Italian techniques",
            category: "pasta",
            badge: "Chef's Pick"
        },
        {
            name: "Fettuccine Pesto Pasta",
            description: "Fresh fettuccine with homemade basil pesto, pine nuts, and Parmigiano-Reggiano",
            category: "pasta"
        },
        {
            name: "Gorgonzola and Limone Fettuccine",
            description: "Creamy gorgonzola cheese sauce with lemon zest and fresh fettuccine",
            category: "pasta"
        },
        {
            name: "Pasta Alla Cenere",
            description: "Charcoal pasta with unique Italian flavors and aromatic herbs",
            category: "pasta"
        },
        {
            name: "Limone e Tartufo Ravioli",
            description: "Handmade ravioli filled with ricotta, lemon, and truffle in butter sauce",
            category: "pasta",
            badge: "⭐ Elegant"
        },
        {
            name: "Gnudi",
            description: "Soft ricotta and spinach dumplings in sage butter sauce",
            category: "pasta",
            badge: "⭐ Must Try"
        }
    ],
    starters: [{
            name: "Mozzarella Fritta",
            description: "Crispy fried mozzarella balls with marinara dipping sauce",
            category: "starters"
        },
        {
            name: "Caponata",
            description: "Sicilian eggplant dish with tomatoes, olives, capers, and celery",
            category: "starters"
        },
        {
            name: "Fungi Alsandra",
            description: "Sautéed mushrooms with garlic, herbs, and white wine",
            category: "starters"
        },
        {
            name: "Lemon Butter",
            description: "Fresh bread with house-made lemon herb butter",
            category: "starters"
        },
        {
            name: "Puttanesca Panzerotti",
            description: "Fried half-moon pastries filled with olives, capers, and tomatoes",
            category: "starters"
        }
    ],
    desserts: [{
            name: "Tiramisu",
            description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream",
            category: "desserts",
            badge: "⭐ Favourite"
        },
        {
            name: "Pistachio Cannoli",
            description: "Crispy pastry shells filled with sweet pistachio cream",
            category: "desserts"
        },
        {
            name: "Chocolate Bombolini",
            description: "Italian donuts filled with rich chocolate custard and dusted with sugar",
            category: "desserts"
        },
        {
            name: "Casattella",
            description: "Traditional Sicilian pastry with sweet ricotta filling",
            category: "desserts"
        },
        {
            name: "Vegan Pistachio Semifreddo",
            description: "Dairy-free frozen dessert with pistachio and almond flavors",
            category: "desserts",
            badge: "🌱 Vegan"
        }
    ],
    beverages: [{
            name: "Italian Hot Chocolate",
            description: "Thick, rich hot chocolate made the traditional Italian way",
            category: "beverages",
            badge: "⭐ Indulgent"
        },
        {
            name: "Espresso",
            description: "Rich Italian espresso from premium beans",
            category: "beverages"
        },
        {
            name: "Cappuccino",
            description: "Classic Italian coffee with steamed milk and foam",
            category: "beverages"
        },
        {
            name: "Limoncello",
            description: "Traditional Italian lemon liqueur, served chilled",
            category: "beverages"
        }
    ]
};

// ============================================
// REVIEWS DATA
// ============================================
const reviewsData = [{
        stars: 5,
        text: "I'd highly recommend this place for exceptional food and classy ambience. The handmade pasta was absolutely divine!",
        author: "Nitinraj Naik"
    },
    {
        stars: 5,
        text: "The staff is very kind, service is good. The tiramisu is the best I've ever had outside of Italy.",
        author: "Mansi Patel"
    },
    {
        stars: 4,
        text: "Would appreciate it if they serve a small piece of bread with pasta. Otherwise, food quality and taste are excellent.",
        author: "Saravanan Venkataraman"
    },
    {
        stars: 5,
        text: "Amazing wood-fired pizzas! The Margherita Napolitana transported me straight to Naples.",
        author: "Priya Sharma"
    },
    {
        stars: 5,
        text: "Perfect spot for a romantic dinner. The outdoor seating is lovely and the Italian hot chocolate is incredible.",
        author: "Rahul Mehta"
    },
    {
        stars: 4,
        text: "Great authentic Italian food in Bangalore. The vegan options are surprisingly delicious!",
        author: "Anjali Desai"
    }
];

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ============================================
    // MENU FUNCTIONALITY
    // ============================================
    const menuItemsContainer = document.getElementById('menuItems');
    const menuTabs = document.querySelectorAll('.menu-tab');

    // Load all menu items initially
    loadMenuItems('all');

    // Menu tab click handlers
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Load menu items for selected category
            const category = this.getAttribute('data-category');
            loadMenuItems(category);
        });
    });

    function loadMenuItems(category) {
        let items = [];

        if (category === 'all') {
            // Combine all menu items
            items = [
                ...menuData.pizzas,
                ...menuData.pasta,
                ...menuData.starters,
                ...menuData.desserts,
                ...menuData.beverages
            ];
        } else {
            // Get items for specific category
            items = menuData[category] || [];
        }

        // Clear container
        menuItemsContainer.innerHTML = '';

        // Add items to container
        items.forEach(item => {
            const menuItem = createMenuItem(item);
            menuItemsContainer.appendChild(menuItem);
        });
    }

    function createMenuItem(item) {
        const div = document.createElement('div');
        div.className = 'menu-item';

        const badge = item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : '';

        div.innerHTML = `
            <div class="menu-item-header">
                <h3>${item.name}</h3>
                ${badge}
            </div>
            <p>${item.description}</p>
            <span class="menu-item-category">${getCategoryName(item.category)}</span>
        `;

        return div;
    }

    function getCategoryName(category) {
        const categoryNames = {
            'pizzas': '🍕 Pizza',
            'pasta': '🍝 Pasta',
            'starters': '🥟 Starter',
            'desserts': '🍰 Dessert',
            'beverages': '☕ Beverage'
        };
        return categoryNames[category] || category;
    }

    // ============================================
    // REVIEWS FUNCTIONALITY
    // ============================================
    const reviewsGrid = document.getElementById('reviewsGrid');

    function loadReviews() {
        reviewsData.forEach(review => {
            const reviewCard = createReviewCard(review);
            reviewsGrid.appendChild(reviewCard);
        });
    }

    function createReviewCard(review) {
        const div = document.createElement('div');
        div.className = 'review-card';

        const stars = '★'.repeat(review.stars) + '☆'.repeat(5 - review.stars);

        div.innerHTML = `
            <div class="review-stars">${stars}</div>
            <p class="review-text">"${review.text}"</p>
            <p class="review-author">— ${review.author}</p>
        `;

        return div;
    }

    loadReviews();

    // ============================================
    // RESERVATION FORM FUNCTIONALITY
    // ============================================
    const reservationForm = document.getElementById('reservationForm');
    const formMessage = document.getElementById('formMessage');

    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    reservationForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        // Validate form
        if (!validateForm(data)) {
            showMessage('Please fill in all required fields correctly.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        try {
            // Send reservation data to backend
            const response = await fetch('/api/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                showMessage('Reservation submitted successfully! We will contact you shortly.', 'success');
                reservationForm.reset();
            } else {
                throw new Error('Reservation failed');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('Thank you for your reservation request! Our team will contact you at ' + data.phone + ' to confirm.', 'success');
            reservationForm.reset();
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    function validateForm(data) {
        // Check required fields
        if (!data.name || !data.email || !data.phone || !data.date || !data.time || !data.guests) {
            return false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return false;
        }

        // Validate phone (Indian format)
        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanPhone = data.phone.replace(/\D/g, '');
        if (!phoneRegex.test(cleanPhone)) {
            return false;
        }

        return true;
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;

        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.feature-card, .menu-item, .review-card, .recommendation-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ============================================
    // GALLERY LIGHTBOX (Simple version)
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // In a full implementation, this would open a lightbox
            // For now, just add a subtle effect
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Format phone number
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phone;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

// Check if restaurant is open
function isRestaurantOpen() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;

    const openTime = 12 * 60; // 12:00 PM
    const closeTime = 23 * 60; // 11:00 PM

    return currentTime >= openTime && currentTime <= closeTime;
}

// Display current restaurant status
function updateRestaurantStatus() {
    const statusElement = document.getElementById('restaurantStatus');
    if (statusElement) {
        if (isRestaurantOpen()) {
            statusElement.textContent = 'Open Now';
            statusElement.style.color = '#4BB543';
        } else {
            statusElement.textContent = 'Closed';
            statusElement.style.color = '#DC3545';
        }
    }
}

// Initialize on page load
updateRestaurantStatus();