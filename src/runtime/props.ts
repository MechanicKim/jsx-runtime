// px를 붙이지 않는 스타일 속성인지 확인
const unitlessNumberProps = new Set([
  "zIndex",
  "opacity",
  "flex",
  "fontWeight",
  "lineHeight",
]);

function isUnitlessNumber(prop: string) {
  return unitlessNumberProps.has(prop);
}

function applyStyles(element: HTMLElement, styles: Record<string, any>) {
  Object.entries(styles).forEach(([prop, value]) => {
    const styleValue =
      typeof value === "number" && !isUnitlessNumber(prop)
        ? `${value}px`
        : value;

    // camelCase를 kebab-case로 변환 (예: backgroundColor -> background-color)
    const cssProp = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
    element.style.setProperty(cssProp, styleValue);
  });
}

export function applyProps(element: HTMLElement, props: Record<string, any>) {
  Object.entries(props).forEach(([key, value]) => {
    if (key === "children") return;

    // 1. Ref
    if (key === "ref" && typeof value === "function") {
      value(element);
    }
    // 2. 이벤트 핸들러
    else if (key.startsWith("on") && typeof value === "function") {
      const eventName = key.substring(2).toLowerCase();
      element.addEventListener(eventName, value);
    }
    // 3. 스타일 객체
    else if (key === "style" && typeof value === "object") {
      applyStyles(element, value);
    }
    // 4. Class명
    else if (key === "className") {
      element.setAttribute("class", value);
    }
    // 5. 일반 속성 및 Boolean 속성
    else {
      if (value === false || value === null || value === undefined) {
        element.removeAttribute(key);
      } else {
        if (key in element) {
          (element as any)[key] = value;
        } else {
          element.setAttribute(key, String(value));
        }
      }
    }
  });
}
