import type { Activity } from "../interfaces/activity.interface";
import { renderTimeCard } from "./TimeCardComponent";

export function renderActivityDashboard(activities: any): HTMLElement {
  const activityDashboard = document.createElement("section");
  activityDashboard.classList.add("activity-dashboard");

  const renderActvityCards = (activities: Activity[]) => {
    activities.forEach((activity) => {
      activityDashboard.append(renderTimeCard(activity));
    });
  };

  renderActvityCards(activities);

  return activityDashboard;
}
