import { StyledLabel, StyledInputContainer} from "./style";
import Input from "components/particles/input-field";
import InputForwardRef from "components/particles/input-field-forwardref";
import { forwardRef } from "react";

type InputContainerProps = {
  labelName?: string;
  password?: boolean;
  placeholder?: string;
  value ?: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  elementFocus?: true | false;
  statusError?: "erro" | null;
};

// export default function InputContainerForwardRef(props: InputContainerProps) {
function InputContainerForwardRef(props: InputContainerProps, ref: any) {
  return (
    <StyledInputContainer>
        <StyledLabel>{props.labelName}</StyledLabel>
        {/* <Input value={props.value} setInput={props.setInput} placeholder={props.placeholder} password={props.password} elementFocus={props.elementFocus} statusError={props.statusError}/> */}
        {/* <InputForwardRef value={props.value} setInput={props.setInput} placeholder={props.placeholder} password={props.password} elementFocus={props.elementFocus} statusError={props.statusError} ref={ref} /> */}
        <InputForwardRef value={props.value} setInput={props.setInput} placeholder={props.placeholder} password={props.password} statusError={props.statusError} ref={ref} />
    </StyledInputContainer>
  );
};

export default forwardRef(InputContainerForwardRef);