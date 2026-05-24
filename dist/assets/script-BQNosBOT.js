(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const f=[{key:"audio",title:"Audio",description:"Meditative recordings arranged for attentive chanting, deep listening, and remembrance of Vrindavan kirtan moods.",page:"/audio.html",cta:"Hear the kirtan collection",albums:[{title:"Kirtan Festivals",slug:"vrindavan-midnight-kirtan",description:"Some recordings from kirtan festivals",coverImage:"/assets/gallery/photos/kp2.jpeg",items:[{title:"Mangala Invocation",file:"/assets/gallery/audio/vrindavan-midnight-kirtan/01-mangala-invocation.mp3",duration:"7:12",notes:"A gentle opening meant to settle the heart before the response kirtan begins."},{title:"Yamuna Breeze Maha-mantra",file:"/assets/gallery/audio/vrindavan-midnight-kirtan/02-yamuna-breeze-maha-mantra.mp3",duration:"12:48",notes:"Layered harmonium and kartals with a patient build in the refrain."},{title:"Moonlit Japa Meditation",file:"/assets/gallery/audio/vrindavan-midnight-kirtan/03-moonlit-japa-meditation.mp3",duration:"9:31",notes:"A soft concluding track suited for personal prayer or temple room reflection."}]},{title:"Vrindavan 24 hour Kirtan",slug:"vrindavan-midnight-kirtan",description:"Recordings from the sri vrindavan dham 24 hour kirtan mandali ",coverImage:"/assets/gallery/photos/vrindavan.jpeg",items:[{title:"Mangala Invocation",file:"/assets/gallery/audio/vrindavan-midnight-kirtan/01-mangala-invocation.mp3",duration:"7:12",notes:"A gentle opening meant to settle the heart before the response kirtan begins."},{title:"Yamuna Breeze Maha-mantra",file:"/assets/gallery/audio/vrindavan-midnight-kirtan/02-yamuna-breeze-maha-mantra.mp3",duration:"12:48",notes:"Layered harmonium and kartals with a patient build in the refrain."},{title:"Moonlit Japa Meditation",file:"/assets/gallery/audio/vrindavan-midnight-kirtan/03-moonlit-japa-meditation.mp3",duration:"9:31",notes:"A soft concluding track suited for personal prayer or temple room reflection."}]},{title:"Maharajs Kirtans",slug:"Sankirtan",description:"Some kirtans of The pillars of Srila Prabhupads movement",coverImage:"/assets/gallery/photos/kkmaharaj.jpeg",items:[{title:"Nama Before Dawn",file:"/assets/gallery/audio/aindra-smarana-sessions/01-nama-before-dawn.mp3",duration:"10:06",notes:"Begins spaciously, then rises into a more insistent congregational pulse."},{title:"Kartal River",file:"/assets/gallery/audio/aindra-smarana-sessions/02-kartal-river.mp3",duration:"8:44",notes:"A bright mid-tempo piece carried by crisp kartal accents and repeating melodic turns."},{title:"Temple Courtyard Finale",file:"/assets/gallery/audio/aindra-smarana-sessions/03-temple-courtyard-finale.mp3",duration:"14:10",notes:"A closing surge meant for festival gatherings and extended response lines."}]},{title:"Vaishnava Bhajans",slug:"Vaishav bhajans",description:"Heartful prayers from our acharyas",coverImage:"/assets/gallery/photos/prabhupad1.jpeg",items:[{title:"Nama Before Dawn",file:"/assets/gallery/audio/aindra-smarana-sessions/01-nama-before-dawn.mp3",duration:"10:06",notes:"Begins spaciously, then rises into a more insistent congregational pulse."},{title:"Kartal River",file:"/assets/gallery/audio/aindra-smarana-sessions/02-kartal-river.mp3",duration:"8:44",notes:"A bright mid-tempo piece carried by crisp kartal accents and repeating melodic turns."},{title:"Temple Courtyard Finale",file:"/assets/gallery/audio/aindra-smarana-sessions/03-temple-courtyard-finale.mp3",duration:"14:10",notes:"A closing surge meant for festival gatherings and extended response lines."}]}]},{key:"video",title:"Video",description:"Locally archived visual Videos for festival memories, temple programs, and kirtans.",page:"/video.html",cta:"Watch the kirtan footage",albums:[{title:"Seva at Krsna Balaram Mandir",slug:"seva-at-krsna-balaram-mandir",description:"Temple hall recordings centered on attentive lead singing, responsive chorus lines, and the atmosphere of service.",coverImage:"/assets/gallery/photos/aindra1.jpeg",items:[{title:"Morning Temple Offering",file:"/assets/gallery/video/seva-at-krsna-balaram-mandir/morning-temple-offering.mp4",poster:"/assets/gallery/photos/aindra1.jpeg",notes:"Recorded from the front of the hall during a serene pre-class kirtan."},{title:"Evening Response Waves",file:"/assets/gallery/video/seva-at-krsna-balaram-mandir/evening-response-waves.mp4",poster:"/assets/gallery/photos/aindra2.jpeg",notes:"Focused on the rise and release of the response lines as the pace increases."}]},{title:"Outdoor Kirtans",slug:"parikrama-nama-procession",description:"Outdoor footage following the movement of kirtan through parikrama routes and festival crowds.",coverImage:"/assets/gallery/photos/vrindavan.jpeg",items:[{title:"Dust of Vraja Procession",file:"/assets/gallery/video/parikrama-nama-procession/dust-of-vraja-procession.mp4",poster:"/assets/gallery/photos/vrindavan.jpeg",notes:"A moving street kirtan with layered mridanga and open-air chorus response."},{title:"Festival Courtyard Arrival",file:"/assets/gallery/video/parikrama-nama-procession/festival-courtyard-arrival.mp4",poster:"/assets/gallery/photos/kp4.jpeg",notes:"Captures the transition from walking kirtan into a fixed courtyard gathering."}]}]},{key:"photos",title:"Photos",description:"Album-based still galleries for darshan, travel moments, instruments, and congregational memories.",page:"/image.html",cta:"View the photo albums",albums:[{title:"Temple Kirtan Darshan",slug:"kartal-and-candlelight-evenings",description:"A closer look at Aindra Prabhu, temple darshan, and the devotional spaces that shaped the kirtan mood.",coverImage:"/assets/gallery/photos/aindraPrDieties.jpeg",items:[{title:"Aindra Prabhu and the Deities",file:"/assets/gallery/photos/aindraPrDieties.jpeg",caption:"A sacred glimpse of kirtan seva offered before the Lordships in Vrindavan."},{title:"Aindra Prabhu's Kirtan Room",file:"/assets/gallery/photos/aindraRoomWalls.jpeg",caption:"The walls and atmosphere of a room steeped in remembrance, prayer, and continuous chanting."},{title:"Aindra Prabhu in Kirtan",file:"/assets/gallery/photos/aindra1.jpeg",caption:"A moment of absorbed kirtan carrying the intensity and sweetness of the holy name."}]},{title:"Vrindavan Memories",slug:"vrindavan-kirtan-parikrama",description:"Scenes from Vraja that hold the quiet beauty, open spaces, and movement of pilgrimage and kirtan.",coverImage:"/assets/gallery/photos/vrindavanLakes.jpeg",items:[{title:"Vrindavan Lakes",file:"/assets/gallery/photos/vrindavanLakes.jpeg",caption:"A peaceful Vraja landscape that reflects the stillness and sweetness of the dham."},{title:"Parikrama Through Vraja",file:"/assets/gallery/photos/vrindavan.jpeg",caption:"A sacred route where chanting, walking, and remembrance move together."},{title:"Kirtan Premi in Seva",file:"/assets/gallery/photos/kp1.jpeg",caption:"A portrait from the ongoing effort to share kirtan in the mood of service and surrender."},{title:"Festival Kirtan Gathering",file:"/assets/gallery/photos/kp4.jpeg",caption:"A congregational moment filled with rhythm, response, and shared devotion."}]}]}];function E(e){return f.find(a=>a.key===e)}/**
 * @license lucide v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(e,a,i=[])=>{const s=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(a).forEach(t=>{s.setAttribute(t,String(a[t]))}),i.length&&i.forEach(t=>{const r=L(...t);s.appendChild(r)}),s};var P=([e,a,i])=>L(e,a,i);/**
 * @license lucide v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=e=>Array.from(e.attributes).reduce((a,i)=>(a[i.name]=i.value,a),{}),x=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",C=e=>e.flatMap(x).map(i=>i.trim()).filter(Boolean).filter((i,s,t)=>t.indexOf(i)===s).join(" "),I=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(a,i,s)=>i.toUpperCase()+s.toLowerCase()),A=(e,{nameAttr:a,icons:i,attrs:s})=>{var $;const t=e.getAttribute(a);if(t==null)return;const r=I(t),o=i[r];if(!o)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const g=T(e),[h,b,M]=o,k={...b,"data-lucide":t,...s,...g},w=C(["lucide",`lucide-${t}`,g,s]);w&&Object.assign(k,{class:w});const S=P([h,k,M]);return($=e.parentNode)==null?void 0:$.replaceChild(S,e)};/**
 * @license lucide v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=["svg",y,[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]]];/**
 * @license lucide v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=["svg",y,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]]];/**
 * @license lucide v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=["svg",y,[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]]];/**
 * @license lucide v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=({icons:e={},nameAttr:a="data-lucide",attrs:i={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const s=document.querySelectorAll(`[${a}]`);if(Array.from(s).forEach(t=>A(t,{nameAttr:a,icons:e,attrs:i})),a==="data-lucide"){const t=document.querySelectorAll("[icon-name]");t.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(t).forEach(r=>A(r,{nameAttr:"icon-name",icons:e,attrs:i})))}},n=document.getElementById("menuToggle"),d=document.getElementById("navLinks"),l=document.querySelector(".nav-item-dropdown"),m=document.querySelector(".nav-dropdown-toggle");function p(){return window.matchMedia("(max-width: 768px)").matches}function c(){l&&(l.classList.remove("open"),m&&m.setAttribute("aria-expanded","false"))}function v(e){if(!l||!m)return;const a=typeof e=="boolean"?e:!l.classList.contains("open");l.classList.toggle("open",a),m.setAttribute("aria-expanded",String(a))}n&&d&&n.addEventListener("click",()=>{const e=d.classList.toggle("active");n.classList.toggle("open",e),e||c()});m&&l&&(m.addEventListener("click",e=>{e.preventDefault(),v()}),l.addEventListener("mouseenter",()=>{p()||v(!0)}),l.addEventListener("mouseleave",()=>{p()||c()}),l.addEventListener("focusin",()=>{p()||v(!0)}),l.addEventListener("focusout",e=>{!p()&&!l.contains(e.relatedTarget)&&c()}));document.addEventListener("click",e=>{l&&!l.contains(e.target)&&c()});document.addEventListener("keydown",e=>{e.key==="Escape"&&(c(),d&&d.classList.remove("active"),n&&n.classList.remove("open"))});window.addEventListener("resize",()=>{p()||(d&&d.classList.remove("active"),n&&n.classList.remove("open"),c())});document.querySelectorAll(".nav-links a").forEach(e=>{e.addEventListener("click",()=>{d&&d.classList.remove("active"),n&&n.classList.remove("open"),c()})});function B(){const e=document.getElementById("events-list"),a=document.getElementById("events-list-full"),i=document.getElementById("testimonials-list"),s=[{date:"May 21, 2026",title:"Monthly Sankirtan Mahotsav",location:"Krishna Balaram Mandir, Vrindavan",description:"Join us for a full day of ecstatic kirtan led by senior kirtaniyas."},{date:"June 05, 2026",title:"Evening Raga Meditation",location:"Online / ISKCON Srirangam",description:"Exploring the meditative ragas of the evening in the service of the Holy Name."},{date:"June 18, 2026",title:"Vrindavan 24-Hour Kirtan Benefit",location:"Radha Gopinath Mandir, Mumbai",description:"A special fundraiser and kirtan event to support the 24-hour kirtan department in Vrindavan."},{date:"July 12, 2026",title:"Ratha Yatra Sankirtan",location:"Central London",description:"Chanting the Holy Names through the streets of London in celebration of Jagannath Ratha Yatra."}];e&&(e.innerHTML=s.slice(0,2).map(t=>`
          <div class="event-card">
              <div class="event-date">${t.date}</div>
              <h3 class="serif">${t.title}</h3>
              <p><strong>Location:</strong> ${t.location}</p>
              <p>${t.description}</p>
          </div>
      `).join("")),a&&(a.innerHTML=s.map(t=>`
          <div class="event-card">
              <div class="event-date">${t.date}</div>
              <h3 class="serif">${t.title}</h3>
              <p><strong>Location:</strong> ${t.location}</p>
              <p>${t.description}</p>
          </div>
      `).join("")),i&&(i.innerHTML=`
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
    `)}function j(e,a,i=""){return`
    <div class="gallery-media-fallback ${i}">
      <span class="gallery-media-fallback-label">${e}</span>
      <strong>${a}</strong>
      <p>Replace this placeholder with the matching local file path when the album media is ready.</p>
    </div>
  `}function u(e,a){return e.coverImage?`
    <img
      src="${e.coverImage}"
      alt="${e.title}"
      class="gallery-cover-image"
      data-fallback-label="${a}"
      data-fallback-detail="${e.title}"
      data-fallback-class="gallery-media-fallback-cover"
    >
  `:j(a,e.title,"gallery-media-fallback-cover")}function D(){const e=document.querySelector("[data-gallery-overview]");if(!e)return;const a=f.map(s=>`
        <article class="gallery-overview-card">
          <div class="gallery-overview-card-copy">
            <span class="gallery-section-label">${s.title}</span>
            <h2 class="serif">${s.title} Collection</h2>
            <p>${s.description}</p>
            <a href="${s.page}" class="btn btn-gold">${s.cta}</a>
          </div>
          <div class="gallery-overview-card-preview">
            ${u(s.albums[0],`${s.title} album`)}
            <div class="gallery-overview-meta">
              <strong>${s.albums[0].title}</strong>
              <span>${s.albums.length} albums available</span>
            </div>
          </div>
        </article>
      `).join(""),i=f.map(s=>{const t=s.albums[0];return`
        <article class="featured-album-card">
          <div class="featured-album-cover">
            ${u(t,`${s.title} feature`)}
          </div>
          <div class="featured-album-copy">
            <span class="gallery-section-label">${s.title}</span>
            <h3 class="serif">${t.title}</h3>
            <p>${t.description}</p>
            <a href="${s.page}" class="gallery-inline-link">Open ${s.title.toLowerCase()} page</a>
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
        ${i}
      </div>
    </section>
  `}function K(e){return`
    <details class="gallery-album-card gallery-album-disclosure">
      <summary class="gallery-album-header">
        <div class="gallery-album-cover">
          ${u(e,"Audio album")}
        </div>
        <div class="gallery-album-summary">
          <span class="gallery-section-label">Audio album</span>
          <h2 class="serif">${e.title}</h2>
          <p>${e.description}</p>
          <div class="gallery-album-summary-footer">
            <span class="gallery-album-toggle-indicator" aria-hidden="true">
              <span class="gallery-album-toggle-text">View album</span>
              <span class="gallery-album-toggle-icon">▾</span>
            </span>
          </div>
        </div>
      </summary>
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
              </div>
            `).join("")}
      </div>
    </details>
  `}function R(e){return`
    <details class="gallery-album-card gallery-album-disclosure">
      <summary class="gallery-album-header">
        <div class="gallery-album-cover">
          ${u(e,"Video album")}
        </div>
        <div class="gallery-album-summary">
          <span class="gallery-section-label">Video album</span>
          <h2 class="serif">${e.title}</h2>
          <p>${e.description}</p>
          <div class="gallery-album-summary-footer">
            <span class="gallery-album-toggle-indicator" aria-hidden="true">
              <span class="gallery-album-toggle-text">View album</span>
              <span class="gallery-album-toggle-icon">▾</span>
            </span>
          </div>
        </div>
      </summary>
      <div class="gallery-album-body gallery-media-grid gallery-video-grid">
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
                </div>
              </div>
            `).join("")}
      </div>
    </details>
  `}function q(e){return`
    <details class="gallery-album-card gallery-album-disclosure">
      <summary class="gallery-album-header">
        <div class="gallery-album-cover">
          ${u(e,"Photo album")}
        </div>
        <div class="gallery-album-summary">
          <span class="gallery-section-label">Photo album</span>
          <h2 class="serif">${e.title}</h2>
          <p>${e.description}</p>
          <div class="gallery-album-summary-footer">
            <span class="gallery-album-toggle-indicator" aria-hidden="true">
              <span class="gallery-album-toggle-text">View album</span>
              <span class="gallery-album-toggle-icon">▾</span>
            </span>
          </div>
        </div>
      </summary>
      <div class="gallery-album-body gallery-media-grid gallery-photo-grid">
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
                </figcaption>
              </figure>
            `).join("")}
      </div>
    </details>
  `}function J(){const e=document.querySelector("[data-gallery-category]");if(!e)return;const a=e.getAttribute("data-gallery-category"),i=E(a);if(!i){e.innerHTML=`
      <div class="gallery-empty-state">
        <h2 class="serif">Gallery section unavailable</h2>
        <p>The requested gallery category could not be found in the local archive.</p>
      </div>
    `;return}let s="";i.key==="audio"?s=i.albums.map(K).join(""):i.key==="video"?s=i.albums.map(R).join(""):s=i.albums.map(q).join(""),e.innerHTML=`
    <div class="gallery-category-intro">
      <span class="gallery-section-label">${i.title}</span>
      <h1 class="serif section-title">${i.title} Collection</h1>
      <p class="subtitle-page">${i.description}</p>
    </div>
    <div class="gallery-album-stack">
      ${s}
    </div>
  `}function F(){document.querySelectorAll("[data-fallback-label]").forEach(e=>{e.addEventListener("error",()=>{const a=e.getAttribute("data-fallback-label")||"Media",i=e.getAttribute("data-fallback-detail")||"Local file",s=e.getAttribute("data-fallback-class")||"";e.outerHTML=j(a,i,s)},{once:!0})})}function z(){const e=[{id:"1",name:"Premium Clay Mridanga",price:250,image:"/assets/gallery/photos/premiumClayMridanga.jpeg",description:"Authentic clay mridanga from Mayapur, professional quality with excellent tuning."},{id:"2",name:"Vrindavan Tulasi Japa Mala",price:25,image:"/assets/gallery/photos/tulsiJapaMala.jpeg",description:"Hand-carved Tulasi beads crafted by Vrajavasis in Vrindavan."},{id:"3",name:"Standard Brass Kartals",price:45,image:"/assets/gallery/photos/kartals.jpeg",description:"Heavy resonant bell-metal kartals for long kirtan sessions."}],a=JSON.parse(localStorage.getItem("kirtanStoreProducts")||"[]");(a.length===0||a.some(s=>["kp3.jpeg","vrindavan.jpeg","kp4.jpeg","unsplash.com"].some(t=>String(s.image||"").includes(t))))&&localStorage.setItem("kirtanStoreProducts",JSON.stringify(e))}function G(){return JSON.parse(localStorage.getItem("kirtanStoreProducts")||"[]")}function Y(){const e=document.getElementById("product-list");if(!e)return;const a=G();if(a.length===0){e.innerHTML='<p class="text-center w-full col-span-full">No products available at the moment.</p>';return}e.innerHTML=a.map(i=>`
        <div class="product-card">
            <img src="${i.image}" alt="${i.name}" class="product-image">
            <div class="product-details">
                <h3 class="serif">${i.name}</h3>
                <p class="product-price">$${Number(i.price).toFixed(2)}</p>
                <p class="product-desc">${i.description}</p>
                <button class="btn btn-gold w-full mt-3" onclick="alert('Added to Cart!')">Add to Cart</button>
            </div>
        </div>
    `).join("")}function W(){const e=window.location.pathname,a=document.querySelector(".nav-parent-link"),i=document.querySelector(".nav-dropdown-toggle");document.querySelectorAll(".nav-links a").forEach(s=>{const t=s.getAttribute("href");if(!t)return;const r=e==="/"||e==="/index.html",o=t==="/"||t==="/index.html",h=new Set(["/gallery.html","/image.html","/audio.html","/video.html","/gallery-audio.html","/gallery-video.html","/gallery-photos.html"]).has(e);(r&&o||!r&&t!=="/"&&e===t||t!=="/"&&t!=="/index.html"&&e.endsWith(t))&&s.classList.add("active-link"),h&&t==="/gallery.html"&&a&&(a.classList.add("active-link"),i&&i.classList.add("active-link"))})}document.addEventListener("DOMContentLoaded",()=>{H({icons:{Instagram:N,Youtube:O,Facebook:V}}),W(),B(),z(),Y(),D(),J(),F()});
