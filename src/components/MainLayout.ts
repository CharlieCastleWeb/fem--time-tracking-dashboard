import { renderTimeCard } from "./TimeCardComponent";
import { renderUserProfileCard } from "./UserProfileCard";

export function renderMainLayout(): HTMLElement {
  const main = document.createElement("main");
  const activityDashboard = document.createElement("section");
  main.classList.add("main-layout");
  activityDashboard.classList.add("activity-dashboard");
  activityDashboard.append(renderTimeCard());
  main.append(renderUserProfileCard());
  main.append(activityDashboard);
  return main;
}
