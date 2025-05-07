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
      <button class="user-profile-card__button">Daily</button>
      <button class="user-profile-card__button">Weekly</button>
      <button class="user-profile-card__button">Monthly</button>
    </div>
  `;

  return container;
}
