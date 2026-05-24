import { galleryCategories, getGalleryCategory } from './gallery-data.js';

// --- UI Logic: Navigation ---
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const galleryDropdown = document.querySelector('.nav-item-dropdown');
const galleryDropdownToggle = document.querySelector('.nav-dropdown-toggle');

function isMobileViewport() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function closeGalleryDropdown() {
  if (!galleryDropdown) {
    return;
  }

  galleryDropdown.classList.remove('open');

  if (galleryDropdownToggle) {
    galleryDropdownToggle.setAttribute('aria-expanded', 'false');
  }
}

function toggleGalleryDropdown(forceOpen) {
  if (!galleryDropdown || !galleryDropdownToggle) {
    return;
  }

  const shouldOpen =
    typeof forceOpen === 'boolean'
      ? forceOpen
      : !galleryDropdown.classList.contains('open');

  galleryDropdown.classList.toggle('open', shouldOpen);
  galleryDropdownToggle.setAttribute('aria-expanded', String(shouldOpen));
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open', isOpen);

    if (!isOpen) {
      closeGalleryDropdown();
    }
  });
}

if (galleryDropdownToggle && galleryDropdown) {
  galleryDropdownToggle.addEventListener('click', (event) => {
    event.preventDefault();
    toggleGalleryDropdown();
  });

  galleryDropdown.addEventListener('mouseenter', () => {
    if (!isMobileViewport()) {
      toggleGalleryDropdown(true);
    }
  });

  galleryDropdown.addEventListener('mouseleave', () => {
    if (!isMobileViewport()) {
      closeGalleryDropdown();
    }
  });

  galleryDropdown.addEventListener('focusin', () => {
    if (!isMobileViewport()) {
      toggleGalleryDropdown(true);
    }
  });

  galleryDropdown.addEventListener('focusout', (event) => {
    if (!isMobileViewport() && !galleryDropdown.contains(event.relatedTarget)) {
      closeGalleryDropdown();
    }
  });
}

document.addEventListener('click', (event) => {
  if (galleryDropdown && !galleryDropdown.contains(event.target)) {
    closeGalleryDropdown();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeGalleryDropdown();

    if (navLinks) {
      navLinks.classList.remove('active');
    }

    if (menuToggle) {
      menuToggle.classList.remove('open');
    }
  }
});

window.addEventListener('resize', () => {
  if (!isMobileViewport()) {
    if (navLinks) {
      navLinks.classList.remove('active');
    }

    if (menuToggle) {
      menuToggle.classList.remove('open');
    }

    closeGalleryDropdown();
  }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinks) {
      navLinks.classList.remove('active');
    }

    if (menuToggle) {
      menuToggle.classList.remove('open');
    }

    closeGalleryDropdown();
  });
});

// --- Static Data Helpers ---
function loadStaticContent() {
  const eventsList = document.getElementById('events-list');
  const eventsListFull = document.getElementById('events-list-full');
  const testimonialsList = document.getElementById('testimonials-list');

  const sampleEvents = [
    {
      date: 'May 21, 2026',
      title: 'Monthly Sankirtan Mahotsav',
      location: 'Krishna Balaram Mandir, Vrindavan',
      description:
        'Join us for a full day of ecstatic kirtan led by senior kirtaniyas.',
    },
    {
      date: 'June 05, 2026',
      title: 'Evening Raga Meditation',
      location: 'Online / ISKCON Srirangam',
      description:
        'Exploring the meditative ragas of the evening in the service of the Holy Name.',
    },
    {
      date: 'June 18, 2026',
      title: 'Vrindavan 24-Hour Kirtan Benefit',
      location: 'Radha Gopinath Mandir, Mumbai',
      description:
        'A special fundraiser and kirtan event to support the 24-hour kirtan department in Vrindavan.',
    },
    {
      date: 'July 12, 2026',
      title: 'Ratha Yatra Sankirtan',
      location: 'Central London',
      description:
        'Chanting the Holy Names through the streets of London in celebration of Jagannath Ratha Yatra.',
    },
  ];

  if (eventsList) {
    eventsList.innerHTML = sampleEvents
      .slice(0, 2)
      .map(
        (event) => `
          <div class="event-card">
              <div class="event-date">${event.date}</div>
              <h3 class="serif">${event.title}</h3>
              <p><strong>Location:</strong> ${event.location}</p>
              <p>${event.description}</p>
          </div>
      `
      )
      .join('');
  }

  if (eventsListFull) {
    eventsListFull.innerHTML = sampleEvents
      .map(
        (event) => `
          <div class="event-card">
              <div class="event-date">${event.date}</div>
              <h3 class="serif">${event.title}</h3>
              <p><strong>Location:</strong> ${event.location}</p>
              <p>${event.description}</p>
          </div>
      `
      )
      .join('');
  }

  if (testimonialsList) {
    testimonialsList.innerHTML = `
      <div class="testimonial-card">
        <div class="flex items-center gap-4 mb-4">
          <img src="/assets/gallery/photos/kp2.jpeg" alt="Radhika Dasi" class="w-12 h-12 rounded-full object-cover">
          <div class="testimonial-author font-serif font-semibold text-lg">— Radhika Dasi</div>
        </div>
        <p class="testimonial-quote italic text-gray-700">"The kirtans led by Kirtan Premi Prabhu have a way of transporting you straight to Vrindavan. Truly soul-stirring."</p>
      </div>
      <div class="testimonial-card">
        <div class="flex items-center gap-4 mb-4">
          <img src="/assets/gallery/photos/kkmaharaj.jpeg" alt="Jagannath Das" class="w-12 h-12 rounded-full object-cover">
          <div class="testimonial-author font-serif font-semibold text-lg">— Jagannath Das</div>
        </div>
        <p class="testimonial-quote italic text-gray-700">"A beautiful experience. The melody and the devotion behind every name chanted is palpable."</p>
      </div>
    `;
  }
}

function createMediaFallback(label, detail, modifierClass = '') {
  return `
    <div class="gallery-media-fallback ${modifierClass}">
      <span class="gallery-media-fallback-label">${label}</span>
      <strong>${detail}</strong>
      <p>Replace this placeholder with the matching local file path when the album media is ready.</p>
    </div>
  `;
}

function renderAlbumCover(album, eyebrow) {
  if (!album.coverImage) {
    return createMediaFallback(eyebrow, album.title, 'gallery-media-fallback-cover');
  }

  return `
    <img
      src="${album.coverImage}"
      alt="${album.title}"
      class="gallery-cover-image"
      data-fallback-label="${eyebrow}"
      data-fallback-detail="${album.title}"
      data-fallback-class="gallery-media-fallback-cover"
    >
  `;
}

function renderOverview() {
  const overviewRoot = document.querySelector('[data-gallery-overview]');

  if (!overviewRoot) {
    return;
  }

  const categoryCards = galleryCategories
    .map(
      (category) => `
        <article class="gallery-overview-card">
          <div class="gallery-overview-card-copy">
            <span class="gallery-section-label">${category.title}</span>
            <h2 class="serif">${category.title} Collection</h2>
            <p>${category.description}</p>
            <a href="${category.page}" class="btn btn-gold">${category.cta}</a>
          </div>
          <div class="gallery-overview-card-preview">
            ${renderAlbumCover(category.albums[0], `${category.title} album`)}
            <div class="gallery-overview-meta">
              <strong>${category.albums[0].title}</strong>
              <span>${category.albums.length} albums available</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  const featuredAlbums = galleryCategories
    .map((category) => {
      const featuredAlbum = category.albums[0];

      return `
        <article class="featured-album-card">
          <div class="featured-album-cover">
            ${renderAlbumCover(featuredAlbum, `${category.title} feature`)}
          </div>
          <div class="featured-album-copy">
            <span class="gallery-section-label">${category.title}</span>
            <h3 class="serif">${featuredAlbum.title}</h3>
            <p>${featuredAlbum.description}</p>
            <a href="${category.page}" class="gallery-inline-link">Open ${category.title.toLowerCase()} page</a>
          </div>
        </article>
      `;
    })
    .join('');

  overviewRoot.innerHTML = `
    <div class="gallery-intro-shell">
      <p class="gallery-intro-lead">
        This collection is shaped by the Aindra-inspired spirit of absorbed chanting:
        saffron warmth, temple memory, and albums meant to hold devotional atmosphere in
        local form.
      </p>
    </div>

    <div class="gallery-overview-grid">
      ${categoryCards}
    </div>

    <div class="decorative-divider">✦ ✦ ✦</div>

    <section class="gallery-featured-strip" aria-labelledby="featured-albums-title">
      <div class="gallery-featured-header">
        <span class="gallery-section-label">Featured albums</span>
        <h2 id="featured-albums-title" class="serif">A first look at the local archive</h2>
        <p>
          Each section begins with a seeded album so the future media library has a devotional
          structure ready to be filled with real recordings, footage, and photographs.
        </p>
      </div>
      <div class="featured-albums-grid">
        ${featuredAlbums}
      </div>
    </section>
  `;
}

function renderAudioAlbum(album) {
  return `
    <details class="gallery-album-card gallery-album-disclosure">
      <summary class="gallery-album-header">
        <div class="gallery-album-cover">
          ${renderAlbumCover(album, 'Audio album')}
        </div>
        <div class="gallery-album-summary">
          <span class="gallery-section-label">Audio album</span>
          <h2 class="serif">${album.title}</h2>
          <p>${album.description}</p>
          <div class="gallery-album-summary-footer">
            <span class="gallery-album-toggle-indicator" aria-hidden="true">
              <span class="gallery-album-toggle-text">View album</span>
              <span class="gallery-album-toggle-icon">▾</span>
            </span>
          </div>
        </div>
      </summary>
      <div class="gallery-album-body">
        ${album.items
          .map(
            (item) => `
              <div class="gallery-media-card gallery-audio-track">
                <div class="gallery-track-header">
                  <div>
                    <h3 class="serif">${item.title}</h3>
                    <p>${item.notes || ''}</p>
                  </div>
                  ${
                    item.duration
                      ? `<span class="gallery-track-duration">${item.duration}</span>`
                      : ''
                  }
                </div>
                <audio controls preload="none" class="gallery-audio-player">
                  <source src="${item.file}" type="audio/mpeg">
                </audio>
              </div>
            `
          )
          .join('')}
      </div>
    </details>
  `;
}

function renderVideoAlbum(album) {
  return `
    <details class="gallery-album-card gallery-album-disclosure">
      <summary class="gallery-album-header">
        <div class="gallery-album-cover">
          ${renderAlbumCover(album, 'Video album')}
        </div>
        <div class="gallery-album-summary">
          <span class="gallery-section-label">Video album</span>
          <h2 class="serif">${album.title}</h2>
          <p>${album.description}</p>
          <div class="gallery-album-summary-footer">
            <span class="gallery-album-toggle-indicator" aria-hidden="true">
              <span class="gallery-album-toggle-text">View album</span>
              <span class="gallery-album-toggle-icon">▾</span>
            </span>
          </div>
        </div>
      </summary>
      <div class="gallery-album-body gallery-media-grid gallery-video-grid">
        ${album.items
          .map(
            (item) => `
              <div class="gallery-media-card">
                <video
                  controls
                  preload="metadata"
                  class="gallery-video-player"
                  ${item.poster ? `poster="${item.poster}"` : ''}
                >
                  <source src="${item.file}" type="video/mp4">
                </video>
                <div class="gallery-media-copy">
                  <h3 class="serif">${item.title}</h3>
                  <p>${item.notes || ''}</p>
                </div>
              </div>
            `
          )
          .join('')}
      </div>
    </details>
  `;
}

function renderPhotosAlbum(album) {
  return `
    <details class="gallery-album-card gallery-album-disclosure">
      <summary class="gallery-album-header">
        <div class="gallery-album-cover">
          ${renderAlbumCover(album, 'Photo album')}
        </div>
        <div class="gallery-album-summary">
          <span class="gallery-section-label">Photo album</span>
          <h2 class="serif">${album.title}</h2>
          <p>${album.description}</p>
          <div class="gallery-album-summary-footer">
            <span class="gallery-album-toggle-indicator" aria-hidden="true">
              <span class="gallery-album-toggle-text">View album</span>
              <span class="gallery-album-toggle-icon">▾</span>
            </span>
          </div>
        </div>
      </summary>
      <div class="gallery-album-body gallery-media-grid gallery-photo-grid">
        ${album.items
          .map(
            (item) => `
              <figure class="gallery-media-card gallery-photo-card">
                <img
                  src="${item.file}"
                  alt="${item.title}"
                  class="gallery-photo-image"
                  data-fallback-label="Photo placeholder"
                  data-fallback-detail="${item.title}"
                  data-fallback-class="gallery-media-fallback-photo"
                >
                <figcaption class="gallery-media-copy">
                  <h3 class="serif">${item.title}</h3>
                  <p>${item.caption || ''}</p>
                </figcaption>
              </figure>
            `
          )
          .join('')}
      </div>
    </details>
  `;
}

function renderCategoryPage() {
  const categoryRoot = document.querySelector('[data-gallery-category]');

  if (!categoryRoot) {
    return;
  }

  const categoryKey = categoryRoot.getAttribute('data-gallery-category');
  const category = getGalleryCategory(categoryKey);

  if (!category) {
    categoryRoot.innerHTML = `
      <div class="gallery-empty-state">
        <h2 class="serif">Gallery section unavailable</h2>
        <p>The requested gallery category could not be found in the local archive.</p>
      </div>
    `;
    return;
  }

  let albumMarkup = '';

  if (category.key === 'audio') {
    albumMarkup = category.albums.map(renderAudioAlbum).join('');
  } else if (category.key === 'video') {
    albumMarkup = category.albums.map(renderVideoAlbum).join('');
  } else {
    albumMarkup = category.albums.map(renderPhotosAlbum).join('');
  }

  categoryRoot.innerHTML = `
    <div class="gallery-category-intro">
      <span class="gallery-section-label">${category.title}</span>
      <h1 class="serif section-title">${category.title} Collection</h1>
      <p class="subtitle-page">${category.description}</p>
    </div>
    <div class="gallery-album-stack">
      ${albumMarkup}
    </div>
  `;
}

function attachMediaFallbacks() {
  document.querySelectorAll('[data-fallback-label]').forEach((element) => {
    element.addEventListener(
      'error',
      () => {
        const label = element.getAttribute('data-fallback-label') || 'Media';
        const detail = element.getAttribute('data-fallback-detail') || 'Local file';
        const modifierClass = element.getAttribute('data-fallback-class') || '';

        element.outerHTML = createMediaFallback(label, detail, modifierClass);
      },
      { once: true }
    );
  });
}

function hydrateFooterSocialIcons() {
  const iconMap = {
    Instagram: './assets/gallery/photos/instagramsymbol.jpeg',
    Facebook: './assets/gallery/photos/facebookLogo.png',
    YouTube: './assets/gallery/photos/youtubelogo.png',
  };

  document.querySelectorAll('.social-icon').forEach((link) => {
    const label = link.getAttribute('aria-label');
    const asset = label ? iconMap[label] : null;

    if (!asset) {
      return;
    }

    link.innerHTML = `<img src="${asset}" alt="${label}" class="social-icon-image">`;
  });
}

// --- E-Commerce Store Logic ---
function initStore() {
    // Initial products if local storage is empty
    const defaultProducts = [
        {
            id: '1',
            name: 'Premium Clay Mridanga',
            price: 250.00,
            image: './assets/gallery/photos/premiumClayMridanga.jpeg',
            description: 'Authentic clay mridanga from Mayapur, professional quality with excellent tuning.'
        },
        {
            id: '2',
            name: 'Vrindavan Tulasi Japa Mala',
            price: 25.00,
            image: './assets/gallery/photos/tulsiJapaMala.jpeg',
            description: 'Hand-carved Tulasi beads crafted by Vrajavasis in Vrindavan.'
        },
        {
            id: '3',
            name: 'Standard Brass Kartals',
            price: 45.00,
            image: './assets/gallery/photos/kartals.jpeg',
            description: 'Heavy resonant bell-metal kartals for long kirtan sessions.'
        }
    ];

    const savedProducts = JSON.parse(localStorage.getItem('kirtanStoreProducts') || '[]');
    const shouldRefreshDefaults =
        savedProducts.length === 0 ||
        savedProducts.some((product) =>
            ['kp3.jpeg', 'vrindavan.jpeg', 'kp4.jpeg', 'unsplash.com'].some((token) =>
                String(product.image || '').includes(token)
            )
        );

    if (shouldRefreshDefaults) {
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
  const galleryParentLink = document.querySelector('.nav-parent-link');
  const galleryToggle = document.querySelector('.nav-dropdown-toggle');

  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');

    if (!href) {
      return;
    }

    const isHome = currentPath === '/' || currentPath === '/index.html';
    const linkIsHome = href === '/' || href === '/index.html';
    const galleryPaths = new Set([
      '/gallery.html',
      '/image.html',
      '/audio.html',
      '/video.html',
      '/gallery-audio.html',
      '/gallery-video.html',
      '/gallery-photos.html',
    ]);
    const isGalleryPage = galleryPaths.has(currentPath);

    const isActive =
      (isHome && linkIsHome) ||
      (!isHome && href !== '/' && currentPath === href) ||
      (href !== '/' && href !== '/index.html' && currentPath.endsWith(href));

    if (isActive) {
      link.classList.add('active-link');
    }

    if (isGalleryPage && href === '/gallery.html' && galleryParentLink) {
      galleryParentLink.classList.add('active-link');

      if (galleryToggle) {
        galleryToggle.classList.add('active-link');
      }
    }
  });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  const icons = {
    Instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
    YouTube: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
    Facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
  };

  document.querySelectorAll('.social-icon').forEach(link => {
    const label = link.getAttribute('aria-label');
    if (icons[label]) {
      link.innerHTML = icons[label];
    }
  });

  document.querySelectorAll('i[data-lucide="chevron-down"]').forEach(icon => {
    icon.outerHTML = icons['chevron-down'];
  });

  highlightActiveLink();
  loadStaticContent();
  initStore();
  renderStore();
  renderOverview();
  renderCategoryPage();
  attachMediaFallbacks();
});
