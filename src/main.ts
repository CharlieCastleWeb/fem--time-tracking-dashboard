import "./styles.scss";

import { renderMainLayout } from "./components/MainLayout";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.appendChild(renderMainLayout());
}
