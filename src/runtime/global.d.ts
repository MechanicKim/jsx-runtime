import { toElement, Fragment } from "./jsx-runtime";

declare global {
  const toElement: typeof toElement;
  const Fragment: typeof Fragment;

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    type Element = HTMLElement | DocumentFragment;
  }
}
