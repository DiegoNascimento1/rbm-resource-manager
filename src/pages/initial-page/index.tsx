import InputContainer from "components/atoms/input-container";
import HeaderAtom from "components/molecules/header-molecules/header-index";
import LoginMolecule from "components/molecules/login-container/login-molecule";
import React from "react";

export default function InitialPage() {
  return (
    <div style={{backgroundColor: "red", "height" : "100vh"}}>
      <HeaderAtom />
      <LoginMolecule/>
    </div>
  );
}
