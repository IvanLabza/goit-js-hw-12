import{a as w,S,i as c}from"./assets/vendor-40038228.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const $="38303120-77261ecd691aecbe62c4afdac",H="https://pixabay.com/api/";async function h(o,e,r){return(await w.get(`${H}?key=${$}&q=${o}&image_type=photo&orientation=horizontal&safesearch=false&page=${e}&per_page=${r}`)).data}function g(o){return o.map(r=>{const{largeImageURL:n,webformatURL:t,tags:i,likes:s,views:b,comments:L,downloads:v}=r;return`<div class="photo-card">
            <a class="gallery-link" href="${n}">
  <img src="${t}" alt="${i}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${s}
    </p>
    <p class="info-item">
      <b>Views</b>${b}
    </p>
    <p class="info-item">
      <b>Comments</b>${L}
    </p>
    <p class="info-item">
      <b>Downloads</b>${v}
    </p>
  </div>
</a></div>`}).join("")}let f=new S(".gallery a");var d="",a=1;const u=40,m=document.querySelector(".search-form"),p=document.querySelector(".gallery"),l=document.querySelector(".load-more"),E=m.firstElementChild;function k(){return document.querySelector(".photo-card").getBoundingClientRect().height}function q(){const e=k()*2;window.scrollBy({top:e,behavior:"smooth"})}function R(o){if(o.preventDefault(),l.classList.contains("is-hidden")||(l.classList.add("is-hidden"),console.log("есть")),d=E.value.trim(),a=1,!d){c.warning({title:"Warning",message:"The search string cannot be empty.",position:"topRight",timeout:3e3});return}h(d,a,u).then(e=>{console.log(e),e.totalHits===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",timeout:3e3}):(p.innerHTML=g(e.hits),f.refresh(),c.success({title:"Success",message:`Hooray! We found ${e.totalHits} images.`,position:"topRight",timeout:3e3}),e.totalHits>u&&l.classList.remove("is-hidden"))}).catch(y).finally(()=>{m.reset()})}function C(){a+=1,h(d,a,u).then(o=>{const e=Math.ceil(o.totalHits/u);a===e&&(l.classList.add("is-hidden"),c.warning({title:"Warning",message:"Sorry, there are no more photos.",position:"topRight",timeout:3e3})),p.insertAdjacentHTML("beforeend",g(o.hits)),f.refresh(),q()}).catch(y)}m.addEventListener("submit",R);l.addEventListener("click",C);function y(o){Notify.failure("Oops! Something went wrong! Try reloading the page!",{position:"topRight",timeout:3e3,width:"600px",fontSize:"24px"}),console.log(o)}
//# sourceMappingURL=commonHelpers.js.map
