import { StyledLabel, StyledInputContainer, StyledEyeButton } from "./style";
import Input from "components/particles/input";
import { useState } from "react";

type InputContainerProps = {
  eyeButton?: boolean;
  labelName?: string;
  password?: boolean;
};

export default function InputContainer(props: InputContainerProps) {
  return (
    <StyledInputContainer>
      <StyledLabel>{props.labelName}</StyledLabel>
      <Input password={props.password} />
    </StyledInputContainer>
  );
}
