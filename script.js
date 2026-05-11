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
          <p class="testimonial-quote">"The kirtans led by Kirtan Premi Prabhu have a way of transporting you straight to Vrindavan. Truly soul-stirring."</p>
          <div class="testimonial-author">- Radhika Dasi</div>
      </div>
      <div class="testimonial-card">
          <p class="testimonial-quote">"A beautiful experience. The melody and the devotion behind every name chanted is palpable."</p>
          <div class="testimonial-author">- Jagannath Das</div>
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
            <h2 class="serif">${category.title} Archives</h2>
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
            <p class="gallery-asset-path">Folder: /assets/gallery/audio/${album.slug}/</p>
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
                <p class="gallery-asset-path">${item.file}</p>
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
            <p class="gallery-asset-path">Folder: /assets/gallery/video/${album.slug}/</p>
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
                  <p class="gallery-asset-path">${item.file}</p>
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
            <p class="gallery-asset-path">Folder: /assets/gallery/photos/${album.slug}/</p>
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
                  <p class="gallery-asset-path">${item.file}</p>
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
    const isGalleryPage = currentPath.startsWith('/gallery');

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
  highlightActiveLink();
  loadStaticContent();
  renderOverview();
  renderCategoryPage();
  attachMediaFallbacks();
});
