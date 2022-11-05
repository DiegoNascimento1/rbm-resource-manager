import { StyledInputCode } from "../input-code/input-code-style";
import { StyledInputPersonalized, StyledDivContainer } from "./style";

type propsDivPersonalized = {
  
};

export default function DivPersonalized() {
  return (
    <StyledDivContainer>
     <StyledInputPersonalized placeholder="1" type={"text"}/>
     <StyledInputPersonalized placeholder="2" type={"text"}/>
     <StyledInputPersonalized placeholder="3" type={"text"}/>
     <StyledInputPersonalized placeholder="4" type={"text"}/>
     <StyledInputPersonalized placeholder="5" type={"text"}/>
     <StyledInputPersonalized placeholder="6" type={"text"}/>
    </StyledDivContainer>
  );
};