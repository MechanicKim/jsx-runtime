import { jsx } from "./jsx-runtime";

export function jsxDEV(
  type: any,
  props: any,
  key: any,
  isStaticChildren: boolean,
  source: any,
  self: any
) {
  return jsx(type, { ...props, key });
}

export { Fragment } from "./jsx-runtime";
