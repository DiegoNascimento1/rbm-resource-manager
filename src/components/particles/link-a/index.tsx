import { StyledLinkA } from "./style";

type propsLinkA = {
  texto:string;
  href: string;
};

export default function LinkA(props: propsLinkA) {

    return (
      <>
        <StyledLinkA href={props.href}>
            {props.texto}
        </StyledLinkA >
      </>
    );
  };