import {StyledInput} from "./index-style";

export interface InputPropsInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {}

  export default function Input({
    children,
  }: InputPropsInterface) {
    return (
        <StyledInput type={children?"text":"password"}/>
    )
  }
