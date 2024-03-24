import{i as p,S as u}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(r){const s="https://pixabay.com/api/",i=new URLSearchParams({key:"43041938-51a06b63921488a862c0fcc6d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${s}?${i}`;return g(),fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function y(r){if(r.length==0)a.innerHTML="",p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const s=r.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:n,comments:m,downloads:f})=>`<li class="gallery-item">
    <a class="gallery-link" href="${o}">
    <img class="gallery-image" src="${i}" alt="${e}" />
    </a>
    <div class="content-image">
    <p class="pege-item">Likes<span class="inf-item">${t}</span></p>
    <p class="pege-item">Views<span class="inf-item">${n}</span></p>
    <p class="pege-item">Comments<span class="inf-item">${m}</span></p>
    <p class="pege-item">Downloads<span class="inf-item">${f}</span></p>
    </div>
    </li>`).join("");a.innerHTML=s,L.refresh()}}const c=document.querySelector("form"),l=document.querySelector(".loader-cont"),a=document.querySelector(".gallery-image");l.style.display="none";const g=()=>{l.style.display="flex"},h=()=>{l.style.display="none"};c.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.search.value.trim();s!==""?(d(s).then(i=>{y(i.hits),h()}),c.reset()):(a.innerHTML="",p.info({message:"Line is empty, enter a value",position:"topLeft"}))});const L=new u(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});
//# sourceMappingURL=commonHelpers.js.map
