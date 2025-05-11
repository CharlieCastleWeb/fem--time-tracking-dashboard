import { onViewModeChange, getViewMode } from "../store/viewMode";
import type { Timeframes, Times } from "../interfaces/activity.interface";

export function renderTimes(timeframes: Timeframes): HTMLElement {
  const container = document.createElement("div");
  container.classList.add("activity-card__times");

  function render(mode: "daily" | "weekly" | "monthly") {
    const timeframe: Times = timeframes[mode];
    container.innerHTML = `
        <div class="activity-card__current-time">
          <span class="activity-card__current-hours">${timeframe.current}</span
          ><span class="activity-card__unit">hrs</span>
        </div>
        <div class="activity-card__previous-time">
          <span class="activity-card__label">
            Last ${
              mode === "monthly" ? "Month" : mode === "weekly" ? "Week" : "Day"
            } -
          </span>
          <span class="activity-card__hours">${timeframe.previous}</span>
          <span class="activity-card__unit">hrs</span>
        </div>
    `;
  }

  render(getViewMode());
  onViewModeChange(render);

  return container;
}
