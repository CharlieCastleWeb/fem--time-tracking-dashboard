export function renderTimeCard(): HTMLElement {
  const container = document.createElement("div");
  container.classList.add("activity-card");
  container.innerHTML = `
    <div class="activity-card__body">
      <div class="activity-card__header">
        <h2 class="activity-card__title">Work</h2>
        <button class="activity-card__menu-button">
          <img
            src="/public/images/icon-ellipsis.svg"
            alt=""
            class="activity-card__menu-icon"
          />
        </button>
      </div>
      <div class="activity-card__times">
        <div class="activity-card__current-time">
          <span class="activity-card__current-hours">32</span
          ><span class="activity-card__unit">hrs</span>
        </div>
        <div class="activity-card__previous-time">
          <span class="activity-card__label">Last week -</span>
          <span class="activity-card__hours">36</span>
          <span class="activity-card__unit">hrs</span>
        </div>
      </div>
    </div>
    
  `;
  return container;
}
