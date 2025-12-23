import type { Child } from "./types";
import { applyProps } from "./props";
import { appendChildren } from "./children";

export const Fragment = Symbol('Fragment');

type TFragment = typeof Fragment;

export function jsx(
  type: string | TFragment | ((props: any) => JSX.Element),
  props: {
    [key: string]: any;
    children: Child[];
  },
): JSX.Element {
  const { children, ...restProps } = props;

  if (typeof type === "function") {
    return type({ ...restProps, children });
  }

  const childrenArray = Array.isArray(children) ? children : [children];
  
  if (type === Fragment) {
    const fragment = document.createDocumentFragment();
    appendChildren(fragment, childrenArray);
    return fragment;
  }

  const element = document.createElement(type); // 요소 생성
  applyProps(element, restProps); // 속성 적용
  appendChildren(element, childrenArray); // 자식 요소 추가
  return element;
}

export const jsxs = jsx;

type TJSX = typeof jsx;

declare global {
  const jsx: TJSX;
  const jsxs: TJSX;
  const Fragment: TFragment;

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    type Element = HTMLElement | DocumentFragment;
  }
}