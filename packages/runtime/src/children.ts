import type { Child } from "./types";

export function appendChildren(
  parent: HTMLElement | DocumentFragment,
  children: Child[]
) {
  children.flat(Infinity).forEach((child) => {
    if (child === null || child === undefined || child === false) return;

    if (child instanceof HTMLElement || child instanceof DocumentFragment) {
      parent.appendChild(child);
    } else {
      parent.appendChild(document.createTextNode(String(child)));
    }
  });
}
