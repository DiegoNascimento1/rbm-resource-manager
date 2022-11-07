import { useState } from "react";
import { StyledButton } from "./button-primary-style";

type ListButtonProps = {
  text?: string;
  onClick?: (() => Promise<void>) | (() => Promise<any>) | (() => void);
  tamanho?: string;
  light?: boolean;
  dark?: boolean;
  gray?: boolean;
  reserve ?: boolean;
  reserved ?: boolean;
}


export default function ButtonParticle(props: ListButtonProps) {



  return (
    <StyledButton
      dark={props.dark}
      gray={props.dark}
      light={props.light}
      reserve={props.reserve}
      reserved={props.reserved}
      tamanho={props.tamanho}
      onClick={props.onClick}
      >{props.text}</StyledButton>
  );
}
