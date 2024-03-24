import{i as c,S as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(r){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"43041938-51a06b63921488a862c0fcc6d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${s}?${o}`;return g(),fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function d(r){if(r.length==0)c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const s=r.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:p,downloads:m})=>`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
    <img class="gallery-image" src="${o}" alt="${e}" />
    </a>
    <div class="content-image">
    <p class="pege-item">Likes<span class="inf-item">${t}</span></p>
    <p class="pege-item">Views<span class="inf-item">${a}</span></p>
    <p class="pege-item">Comments<span class="inf-item">${p}</span></p>
    <p class="pege-item">Downloads<span class="inf-item">${m}</span></p>
    </div>
    </li>`).join("");y.innerHTML=s,L.refresh()}}const l=document.querySelector("form"),n=document.querySelector(".loader-cont"),y=document.querySelector(".gallery-image");n.style.display="none";const g=()=>{n.style.display="flex"},h=()=>{n.style.display="none"};l.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.search.value.trim();s!==""?(u(s).then(o=>{d(o.hits),h()}),l.reset()):c.info({message:"Line is empty, enter a value",position:"topLeft"})});const L=new f(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});
//# sourceMappingURL=commonHelpers.js.map
