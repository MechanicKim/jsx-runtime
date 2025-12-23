import type { Child } from "./types";
import { appendChildren } from "./children";

export function Fragment(
  props: { children?: Child | Child[] } | null
): DocumentFragment {
  const fragment = document.createDocumentFragment();

  const children = props?.children ?? [];
  const childrenArray = Array.isArray(children) ? children : [children];
  appendChildren(fragment, childrenArray);

  return fragment;
}
