import { renderUserProfileCard } from "./UserProfileCard";

import { renderActivityDashboard } from "./ActivityDashboard";
import type { Activity } from "../interfaces/activity.interface";

export function renderMainLayout(data: Activity[]): HTMLElement {
  const main = document.createElement("main");
  main.classList.add("main-layout");
  main.append(renderUserProfileCard());
  main.append(renderActivityDashboard(data));
  return main;
}
