(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const u=[{key:"audio",title:"Audio",description:"Meditative recordings arranged for attentive chanting, deep listening, and remembrance of Vrindavan kirtan moods.",page:"/gallery-audio.html",cta:"Hear the bhajana collection",albums:[{title:"Vrindavan Midnight Kirtan",slug:"vrindavan-midnight-kirtan",description:"A slower, contemplative album inspired by the late-night temple atmosphere and the steady current of maha-mantra meditation.",coverImage:"/assets/gallery/audio/vrindavan-midnight-kirtan/cover.jpg",items:[{title:"Mangala Invocation",file:"/assets/gallery/audio/vrindavan-midnight-kirtan/01-mangala-invocation.mp3",duration:"7:12",notes:"A gentle opening meant to settle the heart before the response kirtan begins."},{title:"Yamuna Breeze Maha-mantra",file:"/assets/gallery/audio/vrindavan-midnight-kirtan/02-yamuna-breeze-maha-mantra.mp3",duration:"12:48",notes:"Layered harmonium and kartals with a patient build in the refrain."},{title:"Moonlit Japa Meditation",file:"/assets/gallery/audio/vrindavan-midnight-kirtan/03-moonlit-japa-meditation.mp3",duration:"9:31",notes:"A soft concluding track suited for personal prayer or temple room reflection."}]},{title:"Aindra Smarana Sessions",slug:"aindra-smarana-sessions",description:"A fuller rhythmic set shaped by strong call-and-response energy, mridanga drive, and the mood of collective absorption.",coverImage:"/assets/gallery/audio/aindra-smarana-sessions/cover.jpg",items:[{title:"Nama Before Dawn",file:"/assets/gallery/audio/aindra-smarana-sessions/01-nama-before-dawn.mp3",duration:"10:06",notes:"Begins spaciously, then rises into a more insistent congregational pulse."},{title:"Kartal River",file:"/assets/gallery/audio/aindra-smarana-sessions/02-kartal-river.mp3",duration:"8:44",notes:"A bright mid-tempo piece carried by crisp kartal accents and repeating melodic turns."},{title:"Temple Courtyard Finale",file:"/assets/gallery/audio/aindra-smarana-sessions/03-temple-courtyard-finale.mp3",duration:"14:10",notes:"A closing surge meant for festival gatherings and extended response lines."}]}]},{key:"video",title:"Video",description:"Locally archived visual recordings for festival memories, temple programs, and kirtan processions.",page:"/gallery-video.html",cta:"Watch the kirtan footage",albums:[{title:"Seva at Krsna Balaram Mandir",slug:"seva-at-krsna-balaram-mandir",description:"Temple hall recordings centered on attentive lead singing, responsive chorus lines, and the atmosphere of service.",coverImage:"/assets/gallery/video/seva-at-krsna-balaram-mandir/cover.jpg",items:[{title:"Morning Temple Offering",file:"/assets/gallery/video/seva-at-krsna-balaram-mandir/morning-temple-offering.mp4",poster:"/assets/gallery/video/seva-at-krsna-balaram-mandir/morning-temple-offering.jpg",notes:"Recorded from the front of the hall during a serene pre-class kirtan."},{title:"Evening Response Waves",file:"/assets/gallery/video/seva-at-krsna-balaram-mandir/evening-response-waves.mp4",poster:"/assets/gallery/video/seva-at-krsna-balaram-mandir/evening-response-waves.jpg",notes:"Focused on the rise and release of the response lines as the pace increases."}]},{title:"Parikrama Nama Procession",slug:"parikrama-nama-procession",description:"Outdoor footage following the movement of kirtan through parikrama routes and festival crowds.",coverImage:"/assets/gallery/video/parikrama-nama-procession/cover.jpg",items:[{title:"Dust of Vraja Procession",file:"/assets/gallery/video/parikrama-nama-procession/dust-of-vraja-procession.mp4",poster:"/assets/gallery/video/parikrama-nama-procession/dust-of-vraja-procession.jpg",notes:"A moving street kirtan with layered mridanga and open-air chorus response."},{title:"Festival Courtyard Arrival",file:"/assets/gallery/video/parikrama-nama-procession/festival-courtyard-arrival.mp4",poster:"/assets/gallery/video/parikrama-nama-procession/festival-courtyard-arrival.jpg",notes:"Captures the transition from walking kirtan into a fixed courtyard gathering."}]}]},{key:"photos",title:"Photos",description:"Album-based still galleries for darshan, travel moments, instruments, and congregational memories.",page:"/gallery-photos.html",cta:"View the photo albums",albums:[{title:"Kartal and Candlelight Evenings",slug:"kartal-and-candlelight-evenings",description:"Low-light temple images evoking late-night chanting, simple offerings, and concentrated bhajana.",coverImage:"/assets/gallery/photos/kartal-and-candlelight-evenings/cover.jpg",items:[{title:"Lamp-lit Harmonium",file:"/assets/gallery/photos/kartal-and-candlelight-evenings/lamp-lit-harmonium.jpg",caption:"A quiet corner prepared for kirtan before the evening gathering begins."},{title:"Hands on Kartals",file:"/assets/gallery/photos/kartal-and-candlelight-evenings/hands-on-kartals.jpg",caption:"Close study of rhythm keeping and the intimacy of congregational response."},{title:"Temple Hall After Arati",file:"/assets/gallery/photos/kartal-and-candlelight-evenings/temple-hall-after-arati.jpg",caption:"The softened light and stillness that linger after the last refrain."}]},{title:"Vrindavan Kirtan Parikrama",slug:"vrindavan-kirtan-parikrama",description:"Travel photographs shaped around walking kirtan, sacred routes, and shared devotional energy.",coverImage:"/assets/gallery/photos/vrindavan-kirtan-parikrama/cover.jpg",items:[{title:"Morning Street Nama",file:"/assets/gallery/photos/vrindavan-kirtan-parikrama/morning-street-nama.jpg",caption:"The first steps of the day, when chanting and footsteps begin together."},{title:"Mridanga Rest Between Stops",file:"/assets/gallery/photos/vrindavan-kirtan-parikrama/mridanga-rest-between-stops.jpg",caption:"An instrument pause that still carries the momentum of the previous song."},{title:"Courtyard Gathering",file:"/assets/gallery/photos/vrindavan-kirtan-parikrama/courtyard-gathering.jpg",caption:"A congregation assembled in a shared circle of song and remembrance."},{title:"Dust and Tilaka",file:"/assets/gallery/photos/vrindavan-kirtan-parikrama/dust-and-tilaka.jpg",caption:"A portrait detail reflecting the simplicity and joy of parikrama service."}]}]}];function y(e){return u.find(a=>a.key===e)}const n=document.getElementById("menuToggle"),o=document.getElementById("navLinks"),l=document.querySelector(".nav-item-dropdown"),c=document.querySelector(".nav-dropdown-toggle");function g(){return window.matchMedia("(max-width: 768px)").matches}function d(){l&&(l.classList.remove("open"),c&&c.setAttribute("aria-expanded","false"))}function v(e){if(!l||!c)return;const a=typeof e=="boolean"?e:!l.classList.contains("open");l.classList.toggle("open",a),c.setAttribute("aria-expanded",String(a))}n&&o&&n.addEventListener("click",()=>{const e=o.classList.toggle("active");n.classList.toggle("open",e),e||d()});c&&l&&(c.addEventListener("click",e=>{e.preventDefault(),v()}),l.addEventListener("mouseenter",()=>{g()||v(!0)}),l.addEventListener("mouseleave",()=>{g()||d()}),l.addEventListener("focusin",()=>{g()||v(!0)}),l.addEventListener("focusout",e=>{!g()&&!l.contains(e.relatedTarget)&&d()}));document.addEventListener("click",e=>{l&&!l.contains(e.target)&&d()});document.addEventListener("keydown",e=>{e.key==="Escape"&&(d(),o&&o.classList.remove("active"),n&&n.classList.remove("open"))});window.addEventListener("resize",()=>{g()||(o&&o.classList.remove("active"),n&&n.classList.remove("open"),d())});document.querySelectorAll(".nav-links a").forEach(e=>{e.addEventListener("click",()=>{o&&o.classList.remove("active"),n&&n.classList.remove("open"),d()})});function b(){const e=document.getElementById("events-list"),a=document.getElementById("events-list-full"),s=document.getElementById("testimonials-list"),i=[{date:"May 21, 2026",title:"Monthly Sankirtan Mahotsav",location:"Krishna Balaram Mandir, Vrindavan",description:"Join us for a full day of ecstatic kirtan led by senior kirtaniyas."},{date:"June 05, 2026",title:"Evening Raga Meditation",location:"Online / ISKCON Srirangam",description:"Exploring the meditative ragas of the evening in the service of the Holy Name."},{date:"June 18, 2026",title:"Vrindavan 24-Hour Kirtan Benefit",location:"Radha Gopinath Mandir, Mumbai",description:"A special fundraiser and kirtan event to support the 24-hour kirtan department in Vrindavan."},{date:"July 12, 2026",title:"Ratha Yatra Sankirtan",location:"Central London",description:"Chanting the Holy Names through the streets of London in celebration of Jagannath Ratha Yatra."}];e&&(e.innerHTML=i.slice(0,2).map(t=>`
          <div class="event-card">
              <div class="event-date">${t.date}</div>
              <h3 class="serif">${t.title}</h3>
              <p><strong>Location:</strong> ${t.location}</p>
              <p>${t.description}</p>
          </div>
      `).join("")),a&&(a.innerHTML=i.map(t=>`
          <div class="event-card">
              <div class="event-date">${t.date}</div>
              <h3 class="serif">${t.title}</h3>
              <p><strong>Location:</strong> ${t.location}</p>
              <p>${t.description}</p>
          </div>
      `).join("")),s&&(s.innerHTML=`
      <div class="testimonial-card">
          <p class="testimonial-quote">"The kirtans led by Kirtan Premi Prabhu have a way of transporting you straight to Vrindavan. Truly soul-stirring."</p>
          <div class="testimonial-author">- Radhika Dasi</div>
      </div>
      <div class="testimonial-card">
          <p class="testimonial-quote">"A beautiful experience. The melody and the devotion behind every name chanted is palpable."</p>
          <div class="testimonial-author">- Jagannath Das</div>
      </div>
    `)}function h(e,a,s=""){return`
    <div class="gallery-media-fallback ${s}">
      <span class="gallery-media-fallback-label">${e}</span>
      <strong>${a}</strong>
      <p>Replace this placeholder with the matching local file path when the album media is ready.</p>
    </div>
  `}function m(e,a){return e.coverImage?`
    <img
      src="${e.coverImage}"
      alt="${e.title}"
      class="gallery-cover-image"
      data-fallback-label="${a}"
      data-fallback-detail="${e.title}"
      data-fallback-class="gallery-media-fallback-cover"
    >
  `:h(a,e.title,"gallery-media-fallback-cover")}function k(){const e=document.querySelector("[data-gallery-overview]");if(!e)return;const a=u.map(i=>`
        <article class="gallery-overview-card">
          <div class="gallery-overview-card-copy">
            <span class="gallery-section-label">${i.title}</span>
            <h2 class="serif">${i.title} Archives</h2>
            <p>${i.description}</p>
            <a href="${i.page}" class="btn btn-gold">${i.cta}</a>
          </div>
          <div class="gallery-overview-card-preview">
            ${m(i.albums[0],`${i.title} album`)}
            <div class="gallery-overview-meta">
              <strong>${i.albums[0].title}</strong>
              <span>${i.albums.length} albums available</span>
            </div>
          </div>
        </article>
      `).join(""),s=u.map(i=>{const t=i.albums[0];return`
        <article class="featured-album-card">
          <div class="featured-album-cover">
            ${m(t,`${i.title} feature`)}
          </div>
          <div class="featured-album-copy">
            <span class="gallery-section-label">${i.title}</span>
            <h3 class="serif">${t.title}</h3>
            <p>${t.description}</p>
            <a href="${i.page}" class="gallery-inline-link">Open ${i.title.toLowerCase()} page</a>
          </div>
        </article>
      `}).join("");e.innerHTML=`
    <div class="gallery-intro-shell">
      <p class="gallery-intro-lead">
        This collection is shaped by the Aindra-inspired spirit of absorbed chanting:
        saffron warmth, temple memory, and albums meant to hold devotional atmosphere in
        local form.
      </p>
    </div>

    <div class="gallery-overview-grid">
      ${a}
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
        ${s}
      </div>
    </section>
  `}function $(e){return`
    <article class="gallery-album-card">
      <div class="gallery-album-header">
        <div class="gallery-album-cover">
          ${m(e,"Audio album")}
        </div>
        <div class="gallery-album-summary">
          <span class="gallery-section-label">Audio album</span>
          <h2 class="serif">${e.title}</h2>
          <p>${e.description}</p>
          <p class="gallery-asset-path">Folder: /assets/gallery/audio/${e.slug}/</p>
        </div>
      </div>
      <div class="gallery-album-body">
        ${e.items.map(a=>`
              <div class="gallery-media-card gallery-audio-track">
                <div class="gallery-track-header">
                  <div>
                    <h3 class="serif">${a.title}</h3>
                    <p>${a.notes||""}</p>
                  </div>
                  ${a.duration?`<span class="gallery-track-duration">${a.duration}</span>`:""}
                </div>
                <audio controls preload="none" class="gallery-audio-player">
                  <source src="${a.file}" type="audio/mpeg">
                </audio>
                <p class="gallery-asset-path">${a.file}</p>
              </div>
            `).join("")}
      </div>
    </article>
  `}function L(e){return`
    <article class="gallery-album-card">
      <div class="gallery-album-header">
        <div class="gallery-album-cover">
          ${m(e,"Video album")}
        </div>
        <div class="gallery-album-summary">
          <span class="gallery-section-label">Video album</span>
          <h2 class="serif">${e.title}</h2>
          <p>${e.description}</p>
          <p class="gallery-asset-path">Folder: /assets/gallery/video/${e.slug}/</p>
        </div>
      </div>
      <div class="gallery-media-grid gallery-video-grid">
        ${e.items.map(a=>`
              <div class="gallery-media-card">
                <video
                  controls
                  preload="metadata"
                  class="gallery-video-player"
                  ${a.poster?`poster="${a.poster}"`:""}
                >
                  <source src="${a.file}" type="video/mp4">
                </video>
                <div class="gallery-media-copy">
                  <h3 class="serif">${a.title}</h3>
                  <p>${a.notes||""}</p>
                  <p class="gallery-asset-path">${a.file}</p>
                </div>
              </div>
            `).join("")}
      </div>
    </article>
  `}function w(e){return`
    <article class="gallery-album-card">
      <div class="gallery-album-header">
        <div class="gallery-album-cover">
          ${m(e,"Photo album")}
        </div>
        <div class="gallery-album-summary">
          <span class="gallery-section-label">Photo album</span>
          <h2 class="serif">${e.title}</h2>
          <p>${e.description}</p>
          <p class="gallery-asset-path">Folder: /assets/gallery/photos/${e.slug}/</p>
        </div>
      </div>
      <div class="gallery-media-grid gallery-photo-grid">
        ${e.items.map(a=>`
              <figure class="gallery-media-card gallery-photo-card">
                <img
                  src="${a.file}"
                  alt="${a.title}"
                  class="gallery-photo-image"
                  data-fallback-label="Photo placeholder"
                  data-fallback-detail="${a.title}"
                  data-fallback-class="gallery-media-fallback-photo"
                >
                <figcaption class="gallery-media-copy">
                  <h3 class="serif">${a.title}</h3>
                  <p>${a.caption||""}</p>
                  <p class="gallery-asset-path">${a.file}</p>
                </figcaption>
              </figure>
            `).join("")}
      </div>
    </article>
  `}function A(){const e=document.querySelector("[data-gallery-category]");if(!e)return;const a=e.getAttribute("data-gallery-category"),s=y(a);if(!s){e.innerHTML=`
      <div class="gallery-empty-state">
        <h2 class="serif">Gallery section unavailable</h2>
        <p>The requested gallery category could not be found in the local archive.</p>
      </div>
    `;return}let i="";s.key==="audio"?i=s.albums.map($).join(""):s.key==="video"?i=s.albums.map(L).join(""):i=s.albums.map(w).join(""),e.innerHTML=`
    <div class="gallery-category-intro">
      <span class="gallery-section-label">${s.title}</span>
      <h1 class="serif section-title">${s.title} Collection</h1>
      <p class="subtitle-page">${s.description}</p>
    </div>
    <div class="gallery-album-stack">
      ${i}
    </div>
  `}function j(){document.querySelectorAll("[data-fallback-label]").forEach(e=>{e.addEventListener("error",()=>{const a=e.getAttribute("data-fallback-label")||"Media",s=e.getAttribute("data-fallback-detail")||"Local file",i=e.getAttribute("data-fallback-class")||"";e.outerHTML=h(a,s,i)},{once:!0})})}function M(){const e=window.location.pathname,a=document.querySelector(".nav-parent-link"),s=document.querySelector(".nav-dropdown-toggle");document.querySelectorAll(".nav-links a").forEach(i=>{const t=i.getAttribute("href");if(!t)return;const r=e==="/"||e==="/index.html",p=t==="/"||t==="/index.html",f=e.startsWith("/gallery");(r&&p||!r&&t!=="/"&&e===t||t!=="/"&&t!=="/index.html"&&e.endsWith(t))&&i.classList.add("active-link"),f&&t==="/gallery.html"&&a&&(a.classList.add("active-link"),s&&s.classList.add("active-link"))})}document.addEventListener("DOMContentLoaded",()=>{M(),b(),k(),A(),j()});
