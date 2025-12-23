import App from "./App";

const root = document.querySelector<HTMLDivElement>("#app");

if (root) {
  root.appendChild(App());
}
