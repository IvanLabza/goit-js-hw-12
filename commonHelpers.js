import{a as S,S as v,i as a}from"./assets/vendor-40038228.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const H="38303120-77261ecd691aecbe62c4afdac",$="https://pixabay.com/api/";async function g(o,e,r){return(await S.get(`${$}?key=${H}&q=${o}&image_type=photo&orientation=horizontal&safesearch=false&page=${e}&per_page=${r}`)).data}function m(o){return o.map(r=>{const{largeImageURL:s,webformatURL:t,tags:i,likes:n,views:b,comments:L,downloads:w}=r;return`<div class="photo-card">
            <a class="gallery-link" href="${s}">
  <img src="${t}" alt="${i}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${n}
    </p>
    <p class="info-item">
      <b>Views</b>${b}
    </p>
    <p class="info-item">
      <b>Comments</b>${L}
    </p>
    <p class="info-item">
      <b>Downloads</b>${w}
    </p>
  </div>
</a></div>`}).join("")}let f=new v(".gallery a"),d="",l=1;const c=40,h=document.querySelector(".search-form"),p=document.querySelector(".gallery"),u=document.querySelector(".load-more"),E=h.firstElementChild;function k(){return document.querySelector(".photo-card").getBoundingClientRect().height}function R(){const e=k()*2;window.scrollBy({top:e,behavior:"smooth"})}function q(o){if(o.preventDefault(),u.classList.contains("is-hidden")||(u.classList.add("is-hidden"),console.log("есть")),d=E.value.trim(),l=1,!d){a.warning({title:"Warning",message:"The search string cannot be empty.",position:"topRight",timeout:3e3});return}g(d,l,c).then(e=>{console.log(e),e.totalHits===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",timeout:3e3}):(p.innerHTML=m(e.hits),f.refresh(),a.success({title:"Success",message:`Hooray! We found ${e.totalHits} images.`,position:"topRight",timeout:3e3}),e.totalHits>c&&u.classList.remove("is-hidden"))}).catch(y).finally(()=>{h.reset()})}function C(){l+=1,g(d,l,c).then(o=>{const e=Math.ceil(o.totalHits/c);(l===e||o.totalHits<=c)&&(u.classList.add("is-hidden"),e===1?a.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3}):a.warning({title:"Warning",message:"Sorry, there are no more photos.",position:"topRight",timeout:3e3})),p.insertAdjacentHTML("beforeend",m(o.hits)),f.refresh(),R()}).catch(y)}h.addEventListener("submit",q);u.addEventListener("click",C);function y(o){Notify.failure("Oops! Something went wrong! Try reloading the page!",{position:"topRight",timeout:3e3,width:"600px",fontSize:"24px"}),console.log(o)}
//# sourceMappingURL=commonHelpers.js.map
