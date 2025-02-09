import { StyledInput, StyledDivContainer, StyledDivSubContainer } from "./style";
import {THEME} from "contants";
import Typography from "components/particles/typography-particles";
import { useState } from "react";

type propsInputChecked = {
  textoLabel:string
};

export default function InputChecked(props: propsInputChecked) {
  const [checked, setChecked] = useState<boolean>(false)
  return (
    <StyledDivContainer onClick={()=>setChecked(!checked)}>
      <StyledDivSubContainer>
        <StyledInput type={"checkbox"}  checked={checked}/>
        <Typography tag={'p'} size={'14px'} margin={"0px"} decoration={'none'} fontWeight={'400'} color={THEME.light.colors.secondary3}>
            {props.textoLabel}
        </Typography>
      </StyledDivSubContainer>
    </StyledDivContainer>
  );
};