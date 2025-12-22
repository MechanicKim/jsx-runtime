import type { Child } from "./types";
import { appendChildren } from "./children";

export function Fragment({
  children,
}: {
  children: Child[];
}): DocumentFragment {
  const fragment = document.createDocumentFragment();
  appendChildren(fragment, children);

  return fragment;
}
