export async function fetchActivityData() {
  const response = await fetch("/mock/data.json");
  if (!response.ok) {
    throw new Error("Error loading data.json");
  }
  return response.json();
}
