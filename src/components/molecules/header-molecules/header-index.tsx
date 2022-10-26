import * as Styled from "./header-molecules-style";

import { Link } from "react-router-dom";
import React from "react";
import LogoParticles from "components/particles/logo-particles/logo-index";

export default function HeaderAtom() {
  return (
    <Styled.Header>
     <LogoParticles width="122px" height="36px"/>
    </Styled.Header>
  );
}
