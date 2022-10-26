import { StyledInput } from "./index-style";

type InputProps = {
  display?: boolean;
};

export default function Input({ display }: InputProps) {
  return <StyledInput type={display ? "password" : "text"} />;
}
