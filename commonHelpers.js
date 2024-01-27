import{a as v,S as H,i as r}from"./assets/vendor-40038228.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&c(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const S="38303120-77261ecd691aecbe62c4afdac",$="https://pixabay.com/api/";async function g(o,e,s){return(await v.get(`${$}?key=${S}&q=${o}&image_type=photo&orientation=horizontal&safesearch=false&page=${e}&per_page=${s}`)).data}function m(o){return o.map(s=>{const{largeImageURL:c,webformatURL:t,tags:i,likes:u,views:b,comments:L,downloads:w}=s;return`<div class="photo-card">
            <a class="gallery-link" href="${c}">
  <img src="${t}" alt="${i}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${u}
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
</a></div>`}).join("")}let f=new H(".gallery a"),h="",n=1;const a=40,d=document.querySelector(".search-form"),p=document.querySelector(".gallery"),l=document.querySelector(".load-more"),E=d.firstElementChild;function R(){return document.querySelector(".photo-card").getBoundingClientRect().height}function k(){const e=R()*2;window.scrollBy({top:e,behavior:"smooth"})}function q(o){if(o.preventDefault(),l.classList.contains("is-hidden")||(l.classList.add("is-hidden"),console.log("есть")),h=E.value.trim(),n=1,!h){r.warning({title:"Warning",message:"The search string cannot be empty.",position:"topRight",timeout:3e3});return}g(h,n,a).then(e=>{if(console.log(e),e.totalHits===0)r.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",timeout:3e3});else if(e.totalHits!==0){p.innerHTML=m(e.hits),f.refresh(),r.success({title:"Success",message:`Hooray! We found ${e.totalHits} images.`,position:"topRight",timeout:3e3}),e.totalHits>a&&l.classList.remove("is-hidden");const s=Math.ceil(e.totalHits/a);n>=s&&r.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3})}}).catch(y).finally(()=>{d.reset()})}function O(){n+=1,g(h,n,a).then(o=>{const e=Math.ceil(o.totalHits/a);!l.classList.contains("is-hidden")&&(n>=e||o.totalHits<=a)&&(l.classList.add("is-hidden"),n>=e?r.warning({title:"Warning",message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3}):r.warning({title:"Warning",message:"Sorry, there are no more photos.",position:"topRight",timeout:3e3})),p.insertAdjacentHTML("beforeend",m(o.hits)),f.refresh(),k()}).catch(y)}d.addEventListener("submit",q);l.addEventListener("click",O);function y(o){r.error("Oops! Something went wrong! Try reloading the page!",{position:"topRight",timeout:3e3,width:"600px",fontSize:"24px"}),console.log(o)}
//# sourceMappingURL=commonHelpers.js.map
