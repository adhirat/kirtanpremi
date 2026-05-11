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
                <p class="testimonial-quote">"The kirtans led by Kirtan Premi Prabhu have a way of transporting you straight to Vrindavan. Truly soul-stirring."</p>
                <div class="testimonial-author">— Radhika Dasi</div>
            </div>
            <div class="testimonial-card">
                <p class="testimonial-quote">"A beautiful experience. The melody and the devotion behind every name chanted is palpable."</p>
                <div class="testimonial-author">— Jagannath Das</div>
            </div>
        `;
    }
}

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
});
