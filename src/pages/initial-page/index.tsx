import InputContainer from "components/atoms/input-container";
import HeaderAtom from "components/molecules/header-molecules/header-index";
import LoginMolecule from "components/molecules/login-container/login-molecule";
import React from "react";
import { useTheme } from "styled-components";

export default function InitialPage() {
  const theme = useTheme()
  return (
    <div style={{backgroundColor: theme.colors.background_login, "height" : "100vh"}}>
      <HeaderAtom />
      <LoginMolecule/>
    </div>
  );
}
