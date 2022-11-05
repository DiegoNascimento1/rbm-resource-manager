import { StyledInput, StyledDiv } from "./style";
import {THEME} from "contants";
import { useState } from "react";
import Typography from "components/particles/typography-particles";

type propsInputChecked = {
  textoLabel:string
};

export default function InputChecked(props: propsInputChecked) {

  const [checked, setChecked] = useState<boolean>(false);
  return (
    <StyledDiv onClick={()=> setChecked(!checked)}>
      <StyledInput 
          type={"checkbox"} 
          checked={checked}
      />
      <Typography 
          tag={'p'} 
          size={'14px'} 
          margin={"0px"} 
          decoration={'none'} 
          fontWeight={'400'} 
          color={THEME.light.colors.secondary3}
          cursorHover={'pointer'}
      >
          {props.textoLabel}
      </Typography>
    </StyledDiv>
  );
};