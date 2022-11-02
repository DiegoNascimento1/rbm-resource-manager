import { useState } from "react";
import { StyledButton } from "./button-primary-style";

type ListButtonProps = {
  text?: string;
  onClick?: (()=>Promise<void>) | (()=>Promise<any>) | (()=>void);
  tamanho?: string;
}


export default function ButtonParticle(props: ListButtonProps) {



  return (
    <StyledButton tamanho={props.tamanho} onClick={props.onClick}>{props.text}</StyledButton>
  );
}
