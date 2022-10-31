import { StyledInput } from "./style";
import {THEME} from "contants";

import Typography from "components/particles/typography-particles";

type propsInputChecked = {
  textoLabel:string
};

// estou pensando em colocar tudo dentro de uma div
// ao clicar na div muda o status do checked
export default function InputChecked(props: propsInputChecked) {
  return (
    <>
      <StyledInput type={"checkbox"} />
      <Typography tag={'p'} size={'14px'} margin={"0px"} decoration={'none'} fontWeight={'400'} color={THEME.light.colors.secondary3}>
          {props.textoLabel}
      </Typography>
    </>
  );
};