import { StyledButton } from "./button-primary-style";

type ListButtonProps = {
  text?: string;
  onClick?: (()=>Promise<void>) | (()=>Promise<any>);
}

export default function ButtonParticle(props: ListButtonProps) {


  return (
    <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
  );
}
