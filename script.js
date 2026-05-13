// --- UI Logic: Navigation ---
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- UI Logic: Tabs ---
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        const target = link.getAttribute('data-tab');
        
        tabLinks.forEach(l => l.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        link.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// --- Static Data Helpers ---
function loadStaticContent() {
    const eventsList = document.getElementById('events-list');
    const eventsListFull = document.getElementById('events-list-full');
    const testimonialsList = document.getElementById('testimonials-list');

    const sampleEvents = [
        {
            date: "May 21, 2026",
            title: "Monthly Sankirtan Mahotsav",
            location: "Krishna Balaram Mandir, Vrindavan",
            description: "Join us for a full day of ecstatic kirtan led by senior kirtaniyas."
        },
        {
            date: "June 05, 2026",
            title: "Evening Raga Meditation",
            location: "Online / ISKCON Srirangam",
            description: "Exploring the meditative ragas of the evening in the service of the Holy Name."
        },
        {
            date: "June 18, 2026",
            title: "Vrindavan 24-Hour Kirtan Benefit",
            location: "Radha Gopinath Mandir, Mumbai",
            description: "A special fundraiser and kirtan event to support the 24-hour kirtan department in Vrindavan."
        },
        {
            date: "July 12, 2026",
            title: "Ratha Yatra Sankirtan",
            location: "Central London",
            description: "Chanting the Holy Names through the streets of London in celebration of Jagannath Ratha Yatra."
        }
    ];

    if (eventsList) {
        eventsList.innerHTML = sampleEvents.slice(0, 2).map(event => `
            <div class="event-card">
                <div class="event-date">${event.date}</div>
                <h3 class="serif">${event.title}</h3>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            </div>
        `).join('');
    }

    if (eventsListFull) {
        eventsListFull.innerHTML = sampleEvents.map(event => `
            <div class="event-card">
                <div class="event-date">${event.date}</div>
                <h3 class="serif">${event.title}</h3>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            </div>
        `).join('');
    }

    if (testimonialsList) {
        testimonialsList.innerHTML = `
            <div class="testimonial-card">
                <div class="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" alt="Radhika Dasi" class="w-12 h-12 rounded-full object-cover">
                    <div class="testimonial-author font-serif font-semibold text-lg">— Radhika Dasi</div>
                </div>
                <p class="testimonial-quote italic text-gray-700">"The kirtans led by Kirtan Premi Prabhu have a way of transporting you straight to Vrindavan. Truly soul-stirring."</p>
            </div>
            <div class="testimonial-card">
                <div class="flex items-center gap-4 mb-4">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" alt="Jagannath Das" class="w-12 h-12 rounded-full object-cover">
                    <div class="testimonial-author font-serif font-semibold text-lg">— Jagannath Das</div>
                </div>
                <p class="testimonial-quote italic text-gray-700">"A beautiful experience. The melody and the devotion behind every name chanted is palpable."</p>
            </div>
        `;
    }
}

// --- E-Commerce Store Logic ---
function initStore() {
    // Initial products if local storage is empty
    const defaultProducts = [
        {
            id: '1',
            name: 'Premium Clay Mridanga',
            price: 250.00,
            image: 'https://images.unsplash.com/photo-1512411221764-1da648174780?auto=format&fit=crop&q=80&w=800',
            description: 'Authentic clay mridanga from Mayapur, professional quality with excellent tuning.'
        },
        {
            id: '2',
            name: 'Vrindavan Tulasi Japa Mala',
            price: 25.00,
            image: 'https://images.unsplash.com/photo-1531746020798-e49528220343?auto=format&fit=crop&q=80&w=800',
            description: 'Hand-carved Tulasi beads crafted by Vrajavasis in Vrindavan.'
        },
        {
            id: '3',
            name: 'Standard Brass Kartals',
            price: 45.00,
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
            description: 'Heavy resonant bell-metal kartals for long kirtan sessions.'
        }
    ];

    if (!localStorage.getItem('kirtanStoreProducts')) {
        localStorage.setItem('kirtanStoreProducts', JSON.stringify(defaultProducts));
    }
}

function getProducts() {
    return JSON.parse(localStorage.getItem('kirtanStoreProducts') || '[]');
}

function saveProducts(products) {
    localStorage.setItem('kirtanStoreProducts', JSON.stringify(products));
}

function renderStore() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    const products = getProducts();
    if (products.length === 0) {
        productList.innerHTML = '<p class="text-center w-full col-span-full">No products available at the moment.</p>';
        return;
    }

    productList.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}" class="product-image">
            <div class="product-details">
                <h3 class="serif">${p.name}</h3>
                <p class="product-price">$${Number(p.price).toFixed(2)}</p>
                <p class="product-desc">${p.description}</p>
                <button class="btn btn-gold w-full mt-3" onclick="alert('Added to Cart!')">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Attach to window so onclick works globally
// --- Active Link Highlighter ---
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Handle root path specifically
        if (currentPath === '/' || currentPath === '/index.html') {
            if (href === '/' || href === '/index.html') {
                link.style.color = 'var(--saffron)';
            }
        } else if (href.includes(currentPath) || currentPath.includes(href)) {
             link.style.color = 'var(--saffron)';
        }
    });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    highlightActiveLink();
    loadStaticContent();
    initStore();
    renderStore();
});
