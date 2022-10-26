import React from "react";
import logo from "../../../assets/images/logo.png";
import * as Styled from "./logo.style";

export type LogoProps = {
  width: string,
  height: string,
  padding?: string,
  margin?: string,
}

export default function LogoParticles(props: LogoProps) {
  return (
    <Styled.Img {...props} src={logo}>
    </Styled.Img>
  );
}
