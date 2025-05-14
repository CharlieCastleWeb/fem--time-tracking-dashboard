(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();let o="weekly";const d=[];function l(t){o=t,d.forEach(e=>e(t)),console.log(`View mode changed to: ${t}`)}function u(){return o}function p(t){d.push(t)}function f(){const t=document.createElement("div");return t.classList.add("user-profile-card"),t.innerHTML=`
    <div class="user-profile-card__header">
      <img src="./images/image-jeremy.png" alt="Jeremy Robson" class="user-profile-card__avatar"/>
      <div class="user-profile-card__info">
        <p class="user-profile-card__label">Report for</p>
        <p class="user-profile-card__name">Jeremy Robson</p>
      </div>
    </div>
    <div class="user-profile-card__timeframe-selector">
      <button class="user-profile-card__button" data-mode="daily">Daily</button>
      <button class="user-profile-card__button" data-mode="weekly">Weekly</button>
      <button class="user-profile-card__button" data-mode="monthly">Monthly</button>
    </div>
  `,t.querySelectorAll(".user-profile-card__button").forEach(e=>{e.addEventListener("click",()=>{const i=e.getAttribute("data-mode");console.log(`Button clicked: ${i}`),l(i)})}),t}function m(t){const e=document.createElement("div");e.classList.add("activity-card__times");function i(s){const r=t[s];e.innerHTML=`
        <div class="activity-card__current-time">
          <span class="activity-card__current-hours">${r.current}</span
          ><span class="activity-card__unit">hrs</span>
        </div>
        <div class="activity-card__previous-time">
          <span class="activity-card__label">
            Last ${s==="monthly"?"Month":s==="weekly"?"Week":"Day"} -
          </span>
          <span class="activity-card__hours">${r.previous}</span>
          <span class="activity-card__unit">hrs</span>
        </div>
    `}return i(u()),p(i),e}const y=t=>`activity-card--${t.toLowerCase().replace(/\s+/g,"-")}`;function _(t){const e=document.createElement("div");e.classList.add("activity-card");const i=y(t.title);return e.classList.add(i),e.innerHTML=`
    <div class="activity-card__body">
      <div class="activity-card__header">
        <h2 class="activity-card__title">${t.title}</h2>
        <button class="activity-card__menu-button">
          <img
            src="/public/images/icon-ellipsis.svg"
            alt=""
            class="activity-card__menu-icon"
          />
        </button>
      </div>
    </div>
  `,e.querySelector(".activity-card__body")?.append(m(t.timeframes)),e}function v(t){const e=document.createElement("section");return e.classList.add("activity-dashboard"),(s=>{s.forEach(r=>{e.append(_(r))})})(t),e}function h(t){const e=document.createElement("main");return e.classList.add("main-layout"),e.append(f()),e.append(v(t)),e}async function b(){const t=await fetch("./mock/data.json");if(!t.ok)throw new Error("Error loading data.json");return t.json()}const n=document.querySelector("#app"),g=await b();n&&n.appendChild(h(g));
