import type { Child } from "./types";
import { applyProps } from "./props";
import { appendChildren } from "./children";

export { Fragment } from "./Fragment";

export function toElement(
  tag: string | ((props: any) => JSX.Element),
  props: Record<string, any> | null,
  ...children: Child[]
): JSX.Element {
  const normalizedProps = props || {};

  // 함수형 컴포넌트 처리
  if (typeof tag === "function") {
    return tag({ ...normalizedProps, children });
  }

  const element = document.createElement(tag); // 요소 생성
  applyProps(element, normalizedProps); // 속성 적용
  appendChildren(element, children); // 자식 요소 추가
  return element;
}
