type viewMode = "daily" | "weekly" | "monthly";

let currentViewMode: viewMode = "weekly";

const listeners: ((mode: viewMode) => void)[] = [];

export function setViewMode(mode: viewMode) {
  currentViewMode = mode;
  listeners.forEach((listener) => listener(mode));
  console.log(`View mode changed to: ${mode}`);
}

export function getViewMode() {
  return currentViewMode;
}

export function onViewModeChange(listener: (mode: viewMode) => void) {
  listeners.push(listener);
}
