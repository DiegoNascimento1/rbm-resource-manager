import { StyledAChecked } from "./style";

type propsLinkA = {
  texto:string;
  href: string;
};

export default function LinkA(props: propsLinkA) {

    return (
      <>
        <StyledAChecked href={props.href}>
            {props.texto}
        </StyledAChecked >
      </>
    );
  };