import{i as l,S as u}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(r){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"43041938-51a06b63921488a862c0fcc6d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${s}?${o}`;return y(),fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function g(r){if(r.length==0)l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});else{const s=r.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:m,downloads:f})=>`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
    <img class="gallery-image" src="${o}" alt="${e}" />
    </a>
    <div class="content-image">
    <p class="pege-item">Likes<span class="inf-item">${t}</span></p>
    <p class="pege-item">Views<span class="inf-item">${n}</span></p>
    <p class="pege-item">Comments<span class="inf-item">${m}</span></p>
    <p class="pege-item">Downloads<span class="inf-item">${f}</span></p>
    </div>
    </li>`).join("");p.innerHTML=s,S.refresh()}}const c=document.querySelector("form"),a=document.querySelector(".loader-cont"),p=document.querySelector(".gallery-image");a.style.display="none";const y=()=>{a.style.display="flex"},h=()=>{a.style.display="none"};function L(r){r.preventDefault(),p.innerHTML="";const s=r.target.elements.search.value.trim();s!==""?(d(s).then(o=>{g(o.hits),h()}),c.reset()):l.info({message:"Please complete the field!",position:"topRight"})}c.addEventListener("submit",L);const S=new u(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});
//# sourceMappingURL=commonHelpers.js.map
