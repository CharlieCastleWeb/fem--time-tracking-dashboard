import type { Activity } from "../interfaces/activity.interface";
import { renderTimes } from "./Times";

const getCardClass = (title: string): string => {
  return `activity-card--${title.toLowerCase().replace(/\s+/g, "-")}`;
};

export function renderTimeCard(activity: Activity): HTMLElement {
  const container = document.createElement("div");
  container.classList.add("activity-card");

  const modifierClass = getCardClass(activity.title);
  container.classList.add(modifierClass);

  container.innerHTML = `
    <div class="activity-card__body">
      <div class="activity-card__header">
        <h2 class="activity-card__title">${activity.title}</h2>
        <button class="activity-card__menu-button">
          <img
            src="/public/images/icon-ellipsis.svg"
            alt=""
            class="activity-card__menu-icon"
          />
        </button>
      </div>
    </div>
  `;

  container
    .querySelector(".activity-card__body")
    ?.append(renderTimes(activity.timeframes));
  return container;
}
