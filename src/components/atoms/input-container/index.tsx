import { StyledLabel, StyledInputContainer} from "./style";
import Input from "components/particles/input-field";
import { useState } from "react";

type InputContainerProps = {
  labelName?: string;
  password?: boolean;
  placeholder?: string;
  value ?: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  elementFocus?: true | false;
  statusError?: "erro" | null;
};

export default function InputContainer(props: InputContainerProps) {
  return (
    <StyledInputContainer>
      <StyledLabel>{props.labelName}</StyledLabel>
      <Input value={props.value} setInput={props.setInput} placeholder={props.placeholder} password={props.password} elementFocus={props.elementFocus} statusError={props.statusError}/>
    </StyledInputContainer>
  );
}

//<Input   />