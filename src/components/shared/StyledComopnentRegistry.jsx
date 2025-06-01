"use client";

import { StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({ children }) {
  return <StyleSheetManager>{children}</StyleSheetManager>;
}
