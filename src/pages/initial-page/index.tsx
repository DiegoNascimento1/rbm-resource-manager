import HeaderAtom from "components/molecules/header-molecules/header-index";
import React from "react";
import { useTheme } from "styled-components";

export default function InitialPage() {
  const theme = useTheme()
  return (
    <div style={{backgroundColor: theme.colors.background_login, "height" : "100vh"}}>
      <HeaderAtom />
    </div>
  );
}
