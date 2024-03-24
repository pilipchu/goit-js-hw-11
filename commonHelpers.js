import{i as l,S as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(i){const s="https://pixabay.com/api/",a=new URLSearchParams({key:"43041938-51a06b63921488a862c0fcc6d",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${s}?${a}`;return fetch(r).then(e=>e.json()).catch(e=>console.log(e))}const g=document.querySelector(".gallery-image");function n(i){const s=i.map(({webformatURL:a,largeImageURL:r,tags:e,likes:t,views:o,comments:p,downloads:m})=>`<li class="gallery-item">
    <a class="gallery-link" href="${r}">
    <img class="gallery-image" src="${a}" alt="${e}" />
    </a>
    <div class="content-image">
    <p class="pege-item">Likes<span class="inf-item">${t}</span></p>
    <p class="pege-item">Views<span class="inf-item">${o}</span></p>
    <p class="pege-item">Comments<span class="inf-item">${p}</span></p>
    <p class="pege-item">Downloads<span class="inf-item">${m}</span></p>
    </div>
    </li>`).join("");g.innerHTML=s}const c=document.querySelector("form");c.addEventListener("submit",i=>{i.preventDefault();let s=i.target.elements.images.value.trim();if(s===""){l.info({message:"Line is empty, enter a value",position:"topLeft"}),n([]);return}u(s).then(a=>{const r=a.hits;r.length<=0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n([])):(n(r),y.refresh())}),c.reset()});var y=new f(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});
//# sourceMappingURL=commonHelpers.js.map
