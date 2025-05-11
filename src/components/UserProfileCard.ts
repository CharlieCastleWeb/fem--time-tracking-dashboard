import { setViewMode } from "../store/viewMode";

// function handleClick(mode: "daily" | "weekly" | "monthly") {
//   console.log(`Button clicked: ${mode}`);
//   setViewMode(mode);
// }

export function renderUserProfileCard(): HTMLElement {
  const container = document.createElement("div");
  container.classList.add("user-profile-card");
  container.innerHTML = `
    <div class="user-profile-card__header">
      <img src="/images/image-jeremy.png" alt="Jeremy Robson" class="user-profile-card__avatar"/>
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
  `;

  container.querySelectorAll(".user-profile-card__button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode") as
        | "daily"
        | "weekly"
        | "monthly";
      console.log(`Button clicked: ${mode}`);
      setViewMode(mode);
    });
  });

  return container;
}
