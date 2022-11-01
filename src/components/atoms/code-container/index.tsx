import { StyledInputContainer} from "./style";
import Input from "components/particles/input-field";
import { useState } from "react";
import CodeInput from "components/particles/input-code/input-code-index";
import Typography from "components/particles/typography-particles";


export default function InputCodeContainer() {
  return (
    <StyledInputContainer>
      <Typography tag="h2" fontWeight="500" size="14px" margin="0px">Código</Typography>
      <CodeInput/>
    </StyledInputContainer>
  );
}
