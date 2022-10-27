import * as Styled from "./checked-atom-style";
import { StyledLabel, StyledDiv } from "./checked-atom-style";

import InputCheckedParticles from "components/particles/input-checked-particles/input-checked-particles-index";
import { StyledAChecked } from "components/particles/a-checked-particles/a-checked-particles-index-style";

type propsCheckedAtom = {
    textoLabel:string;
    textoLink:string;
};

export default function CheckedAtom(props:propsCheckedAtom) {
  return (
    //  aproveito div existente
    <Styled.StyledDiv>
        {/* crio um label e passo o valor por props */}
        <div>
          <InputCheckedParticles/>
          <StyledLabel>{props.textoLabel}</StyledLabel>
        </div>
        <div>
        {/* <StyledLabel>{props.textoLink}</StyledLabel> */}
        <StyledAChecked>{props.textoLink}</StyledAChecked>
        </div>      
    </Styled.StyledDiv>
  );
}