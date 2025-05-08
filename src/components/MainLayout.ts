import { renderUserProfileCard } from "./UserProfileCard";

export function renderMainLayout(): HTMLElement {
  const container = document.createElement("section");
  container.classList.add("main-layout");
  container.append(renderUserProfileCard());
  return container;
}
