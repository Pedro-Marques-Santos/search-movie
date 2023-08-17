import { RefObject } from "react";

export const MyScrollToElement = (useref: RefObject<HTMLHeadingElement>) => {
  if (useref.current) {
    useref.current.scrollIntoView({ behavior: "smooth" });
  }
};
