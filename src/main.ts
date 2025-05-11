import "./styles.scss";

import { renderMainLayout } from "./components/MainLayout";
import type { Activity } from "./interfaces/activity.interface";
import { fetchActivityData } from "./utils/fetchData";

const app = document.querySelector<HTMLDivElement>("#app");
const data: Activity[] = await fetchActivityData();

if (app) {
  app.appendChild(renderMainLayout(data));
}
