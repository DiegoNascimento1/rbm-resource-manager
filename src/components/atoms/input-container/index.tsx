import { StyledLabel, StyledInputContainer, StyledEyeButton } from "./style";
import Input from "components/particles/input";
import { useState } from "react";

type InputContainerProps = {
  labelName?: string;
  password?: boolean;
  placeholder?: string;
};

export default function InputContainer(props: InputContainerProps) {
  return (
    <StyledInputContainer>
      <StyledLabel>{props.labelName}</StyledLabel>
      <Input placeholder={props.placeholder} password={props.password} />
    </StyledInputContainer>
  );
}
